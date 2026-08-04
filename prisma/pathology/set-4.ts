/**
 * PATHOLOGY — PRACTICE SET 4
 * Hemodynamic Disorders, Thrombosis, Embolism & Shock
 *
 * Difficulty: Intermediate-Advanced. Heavy on lab interpretation and on
 * "what do you do next" reasoning, because this is the material that turns up
 * in real emergencies.
 *
 * 92 questions across 12 topics:
 *   Edema & Starling Forces · Hyperemia, Congestion & Hemorrhage · Hemostasis &
 *   Platelets · Coagulation Cascade & Anticoagulants · Virchow's Triad &
 *   Thrombosis · Thrombophilia · Embolism · Special Embolic Syndromes ·
 *   Infarction · Shock · Disseminated Intravascular Coagulation ·
 *   Coagulation Lab Interpretation
 *
 * Item mix: 68 single-answer vignettes, 13 select-all-that-apply, 11 true/false.
 * US conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_4: Q[] = [
  /* ══════════════ EDEMA & STARLING FORCES ══════════════ */
  {
    stem: "A 68-year-old man with decompensated heart failure has bilateral pitting leg edema and elevated jugular venous pressure. Which Starling force is primarily deranged?",
    topic: "Edema & Starling Forces",
    explanation:
      "Elevated venous and therefore capillary hydrostatic pressure drives fluid into the interstitium, producing a protein-poor transudate. Plasma oncotic pressure is typically normal in heart failure, distinguishing it from the edema of nephrotic syndrome or cirrhosis.",
    choices: [
      { text: "Increased capillary hydrostatic pressure", isCorrect: true },
      { text: "Decreased plasma oncotic pressure" },
      { text: "Increased capillary permeability to protein" },
      { text: "Lymphatic obstruction" },
      { text: "Increased interstitial oncotic pressure from inflammation" },
    ],
  },
  {
    stem: "Which of the following produce edema through REDUCED plasma oncotic pressure? Select all that apply.",
    type: "MULTI",
    topic: "Edema & Starling Forces",
    explanation:
      "Nephrotic syndrome loses albumin in urine, cirrhosis fails to synthesize it, and protein-losing enteropathy and severe malnutrition both deplete it. Heart failure and deep vein thrombosis raise hydrostatic pressure instead, with normal albumin.",
    choices: [
      { text: "Nephrotic syndrome with urinary protein loss", isCorrect: true },
      { text: "Cirrhosis with impaired albumin synthesis", isCorrect: true },
      { text: "Protein-losing enteropathy", isCorrect: true },
      { text: "Right heart failure" },
      { text: "Femoral vein thrombosis" },
    ],
  },
  {
    stem: "Why does periorbital edema characteristically appear first in nephrotic syndrome but ankle edema first in heart failure?",
    topic: "Edema & Starling Forces",
    explanation:
      "Oncotic edema distributes according to tissue compliance, so loose periorbital tissue swells first and is most noticeable on waking. Hydrostatic edema follows gravity, so it collects in dependent regions such as ankles or the sacrum in a bedbound patient.",
    choices: [
      { text: "Oncotic edema follows tissue compliance; hydrostatic edema follows gravity", isCorrect: true },
      { text: "Oncotic edema follows gravity; hydrostatic edema follows compliance" },
      { text: "Periorbital tissue has uniquely high capillary permeability" },
      { text: "The eyelids lack lymphatic drainage entirely" },
      { text: "Heart failure spares the head because of carotid autoregulation" },
    ],
  },
  {
    stem: "Cerebral edema following traumatic brain injury raises intracranial pressure. Which compensatory principle explains why compensation eventually fails abruptly?",
    topic: "Edema & Starling Forces",
    explanation:
      "The Monro-Kellie doctrine holds that the cranial vault has fixed volume, so CSF and venous blood are displaced first. Once that reserve is exhausted, small further increases in volume produce steep rises in pressure — hence the sudden clinical deterioration.",
    choices: [
      { text: "Monro-Kellie doctrine — fixed vault volume with exhaustible reserve", isCorrect: true },
      { text: "Starling's law of the heart applied to cerebral vessels" },
      { text: "Laplace's law governing vessel wall tension" },
      { text: "Poiseuille's law governing cerebral blood flow" },
      { text: "Fick principle applied to oxygen extraction" },
    ],
  },
  {
    stem: "True or False: Pitting edema indicates a low-protein transudate, whereas non-pitting edema suggests lymphedema or myxedema.",
    type: "TRUE_FALSE",
    topic: "Edema & Starling Forces",
    explanation:
      "True. Protein-poor fluid displaces easily under pressure and leaves a pit, whereas the protein-rich fluid and mucopolysaccharide deposition of lymphedema and myxedema resist displacement. This bedside distinction narrows the differential immediately.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with cirrhosis has ascites. Serum albumin is 2.4 g/dL and ascitic albumin 0.6 g/dL. What is the serum-ascites albumin gradient, and what does it indicate?",
    topic: "Edema & Starling Forces",
    explanation:
      "The gradient is 1.8 g/dL, and a value of 1.1 or above indicates portal hypertension with high specificity. A gradient below 1.1 would point toward peritoneal causes such as malignancy, tuberculosis or pancreatic ascites.",
    choices: [
      { text: "1.8 g/dL — portal hypertension", isCorrect: true },
      { text: "1.8 g/dL — peritoneal carcinomatosis" },
      { text: "0.6 g/dL — tuberculous peritonitis" },
      { text: "3.0 g/dL — nephrotic syndrome" },
      { text: "1.8 g/dL — the gradient is not interpretable in cirrhosis" },
    ],
  },
  {
    stem: "Pulmonary edema from left heart failure produces which characteristic finding on lung histology in chronic cases?",
    topic: "Edema & Starling Forces",
    explanation:
      "Hemosiderin-laden macrophages — heart failure cells — accumulate in alveoli after repeated microhemorrhage. Their presence indicates chronicity rather than an acute episode, which is a useful discriminator at autopsy or on cytology.",
    choices: [
      { text: "Hemosiderin-laden macrophages in alveolar spaces", isCorrect: true },
      { text: "Hyaline membranes lining alveolar ducts" },
      { text: "Non-caseating granulomas along lymphatics" },
      { text: "Ferruginous bodies within alveolar septa" },
      { text: "Intra-alveolar plugs of loose connective tissue" },
    ],
  },

  /* ══════════════ HYPEREMIA, CONGESTION & HEMORRHAGE ══════════════ */
  {
    stem: "Which statement correctly distinguishes hyperemia from congestion?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Hyperemia is an active process of arteriolar dilation delivering oxygenated blood, so the tissue appears red. Congestion is passive, from impaired venous outflow, so deoxygenated blood accumulates and the tissue appears blue — the color difference reflects the mechanism.",
    choices: [
      { text: "Hyperemia is active arteriolar dilation and appears red; congestion is passive venous outflow failure and appears blue", isCorrect: true },
      { text: "Hyperemia is passive and appears blue; congestion is active and appears red" },
      { text: "Both are active processes differing only in duration" },
      { text: "Hyperemia occurs only in the lungs; congestion only in the liver" },
      { text: "Congestion always precedes hyperemia in inflammation" },
    ],
  },
  {
    stem: "A liver at autopsy shows a mottled red and pale pattern described as nutmeg liver. Which condition does this indicate?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Chronic passive congestion from right heart failure causes centrilobular congestion and hemorrhage alternating with paler periportal tissue. Prolonged congestion can progress to cardiac cirrhosis, so the finding has prognostic meaning beyond its appearance.",
    choices: [
      { text: "Chronic passive hepatic congestion from right heart failure", isCorrect: true },
      { text: "Acute viral hepatitis with panlobular necrosis" },
      { text: "Hepatic adenoma with hemorrhage" },
      { text: "Primary biliary cholangitis" },
      { text: "Hemochromatosis with iron deposition" },
    ],
  },
  {
    stem: "Which terms correctly describe the sizes of cutaneous hemorrhage? Select all that apply.",
    type: "MULTI",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Petechiae are 1 to 2 mm, purpura are 3 to 9 mm, and ecchymoses exceed 1 cm. A hematoma is a confined mass of blood within tissue, and hemothorax refers to blood within the pleural cavity rather than a skin lesion.",
    choices: [
      { text: "Petechiae are 1 to 2 mm", isCorrect: true },
      { text: "Purpura are approximately 3 to 9 mm", isCorrect: true },
      { text: "Ecchymoses exceed 1 cm", isCorrect: true },
      { text: "Petechiae exceed 1 cm" },
      { text: "Purpura are smaller than petechiae" },
    ],
  },
  {
    stem: "Petechiae in a patient with a platelet count of 12,000/µL reflect which mechanism?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Platelets maintain endothelial integrity at the microvascular level, so severe thrombocytopenia allows spontaneous capillary leak of red cells. Coagulation factor deficiencies instead produce deep bleeding into joints and muscle rather than petechiae — a distinction that guides workup.",
    choices: [
      { text: "Loss of platelet-dependent microvascular integrity", isCorrect: true },
      { text: "Deficiency of factor VIII activity" },
      { text: "Failure of the extrinsic coagulation pathway" },
      { text: "Excess fibrinolysis from plasmin activation" },
      { text: "Vitamin K deficiency impairing carboxylation" },
    ],
  },
  {
    stem: "True or False: A patient can lose approximately 20% of blood volume acutely with minimal clinical consequence in health.",
    type: "TRUE_FALSE",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "True. Loss up to about 20% is generally well compensated in a healthy adult, which is the basis of routine blood donation. Greater losses produce progressive tachycardia, narrowed pulse pressure and eventually hypotension.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient has recurrent gastrointestinal bleeding and now has hemoglobin 8.4 g/dL with MCV 71 fL and ferritin 6 ng/mL. Which conclusion follows?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Chronic external blood loss depletes iron stores, producing microcytic anemia with low ferritin. Acute hemorrhage does not lower ferritin and initially leaves hemoglobin unchanged until plasma volume is restored — the timeline itself is diagnostic.",
    choices: [
      { text: "Chronic blood loss with iron depletion", isCorrect: true },
      { text: "Acute hemorrhage within the last 2 hours" },
      { text: "Hemolysis with intravascular red cell destruction" },
      { text: "Anemia of chronic disease with iron sequestration" },
      { text: "Megaloblastic anemia from B12 deficiency" },
    ],
  },
  {
    stem: "Why does hemoglobin concentration remain near normal in the first hour after major hemorrhage?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Whole blood is lost, so the ratio of red cells to plasma is initially unchanged; hemoglobin falls only as interstitial fluid shifts in and dilutes the remaining blood over hours. Relying on an early hemoglobin to exclude significant hemorrhage is therefore a serious error.",
    choices: [
      { text: "Whole blood is lost proportionally; dilution occurs only as fluid shifts in", isCorrect: true },
      { text: "The marrow releases stored red cells within minutes" },
      { text: "The spleen contracts and releases concentrated red cells" },
      { text: "Erythropoietin raises the count within the first hour" },
      { text: "Hemoglobin rises acutely due to hemoconcentration" },
    ],
  },
  {
    stem: "Chronic pulmonary congestion causes which long-term structural change?",
    topic: "Hyperemia, Congestion & Hemorrhage",
    explanation:
      "Persistently raised pulmonary venous pressure produces septal fibrosis with hemosiderin deposition, described as brown induration of the lung. This stiffening explains why chronic heart failure patients develop progressive restrictive physiology.",
    choices: [
      { text: "Brown induration with septal fibrosis and hemosiderin", isCorrect: true },
      { text: "Panacinar emphysema with alveolar destruction" },
      { text: "Bronchiectasis with airway dilation" },
      { text: "Caseating granulomas in the upper lobes" },
      { text: "Pleural plaques with calcification" },
    ],
  },

  /* ══════════════ HEMOSTASIS & PLATELETS ══════════════ */
  {
    stem: "Which receptor mediates platelet ADHESION to exposed subendothelial collagen, and via which bridging molecule?",
    topic: "Hemostasis & Platelets",
    explanation:
      "GpIb binds von Willebrand factor, which bridges the platelet to collagen. GpIIb/IIIa binds fibrinogen and mediates aggregation between platelets — a different receptor for a different step, and the distinction underpins both Bernard-Soulier and Glanzmann disease.",
    choices: [
      { text: "GpIb via von Willebrand factor", isCorrect: true },
      { text: "GpIIb/IIIa via fibrinogen" },
      { text: "P2Y12 via ADP" },
      { text: "Thromboxane receptor via TXA2" },
      { text: "PAR-1 via thrombin" },
    ],
  },
  {
    stem: "A patient has a normal platelet count, prolonged bleeding time, and platelets that fail to aggregate with any agonist except ristocetin. Which disorder is this?",
    topic: "Hemostasis & Platelets",
    explanation:
      "Glanzmann thrombasthenia is GpIIb/IIIa deficiency, so aggregation fails with every agonist while ristocetin-induced agglutination — which depends on GpIb and vWF, not aggregation — remains intact. Bernard-Soulier gives the mirror image: absent ristocetin response with large platelets.",
    choices: [
      { text: "Glanzmann thrombasthenia", isCorrect: true },
      { text: "Bernard-Soulier syndrome" },
      { text: "von Willebrand disease" },
      { text: "Immune thrombocytopenic purpura" },
      { text: "Hemophilia A" },
    ],
  },
  {
    stem: "Match each antiplatelet drug to its target. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Hemostasis & Platelets",
    explanation:
      "Aspirin irreversibly inhibits COX-1 and thus thromboxane A2; clopidogrel blocks the P2Y12 ADP receptor; abciximab and eptifibatide block GpIIb/IIIa. Dipyridamole acts through phosphodiesterase and adenosine uptake rather than COX, and warfarin is an anticoagulant, not an antiplatelet.",
    choices: [
      { text: "Aspirin — irreversible COX-1 inhibition", isCorrect: true },
      { text: "Clopidogrel — P2Y12 ADP receptor blockade", isCorrect: true },
      { text: "Eptifibatide — GpIIb/IIIa blockade", isCorrect: true },
      { text: "Dipyridamole — COX-2 inhibition" },
      { text: "Warfarin — thromboxane synthase inhibition" },
    ],
  },
  {
    stem: "Which substances released from platelet DENSE granules amplify aggregation?",
    topic: "Hemostasis & Platelets",
    explanation:
      "Dense granules release ADP, calcium and serotonin, with ADP recruiting further platelets through P2Y12. Alpha granules contain the larger proteins — fibrinogen, von Willebrand factor, PDGF and factor V.",
    choices: [
      { text: "ADP, calcium and serotonin", isCorrect: true },
      { text: "Fibrinogen, von Willebrand factor and PDGF" },
      { text: "Factor V, factor VIII and fibronectin" },
      { text: "Myeloperoxidase and lactoferrin" },
      { text: "Histamine and heparin" },
    ],
  },
  {
    stem: "True or False: Intact endothelium actively inhibits thrombosis through prostacyclin, nitric oxide, thrombomodulin and heparan sulfate.",
    type: "TRUE_FALSE",
    topic: "Hemostasis & Platelets",
    explanation:
      "True. Endothelium is an active antithrombotic surface, not a passive barrier: prostacyclin and nitric oxide inhibit platelets, thrombomodulin redirects thrombin to activate protein C, and heparan sulfate potentiates antithrombin. Endothelial injury removes all four defenses at once.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with von Willebrand disease has which characteristic laboratory pattern?",
    topic: "Hemostasis & Platelets",
    explanation:
      "vWF stabilizes factor VIII in plasma, so its deficiency prolongs both bleeding time and aPTT while PT and platelet count stay normal. Recognizing the isolated aPTT prolongation prevents misdiagnosis as mild hemophilia.",
    choices: [
      { text: "Prolonged bleeding time and aPTT, normal PT and platelet count", isCorrect: true },
      { text: "Prolonged PT with normal aPTT and bleeding time" },
      { text: "Low platelet count with normal PT and aPTT" },
      { text: "Prolonged PT and aPTT with low fibrinogen" },
      { text: "All coagulation studies normal" },
    ],
  },
  {
    stem: "Desmopressin (DDAVP) helps in type 1 von Willebrand disease and mild hemophilia A through which mechanism?",
    topic: "Hemostasis & Platelets",
    explanation:
      "DDAVP releases stored von Willebrand factor and factor VIII from endothelial Weibel-Palade bodies. It therefore requires existing stores, which is why it fails in type 3 vWD and in severe hemophilia A where there is nothing to release.",
    choices: [
      { text: "Release of stored vWF and factor VIII from Weibel-Palade bodies", isCorrect: true },
      { text: "Direct synthesis of new factor VIII by hepatocytes" },
      { text: "Inhibition of fibrinolysis by blocking plasminogen" },
      { text: "Irreversible activation of GpIIb/IIIa on platelets" },
      { text: "Increased hepatic production of vitamin K dependent factors" },
    ],
  },
  {
    stem: "A patient on aspirin has a normal platelet count but prolonged bleeding time. Approximately how long after stopping aspirin does platelet function normalize?",
    topic: "Hemostasis & Platelets",
    explanation:
      "Aspirin irreversibly acetylates COX-1 and platelets cannot resynthesize it, so recovery depends on production of new platelets — roughly 7 to 10 days for the pool to turn over. This is why aspirin is typically stopped a week before high-bleeding-risk surgery.",
    choices: [
      { text: "7 to 10 days", isCorrect: true },
      { text: "6 to 12 hours" },
      { text: "24 to 48 hours" },
      { text: "3 to 4 weeks" },
      { text: "Function never recovers" },
    ],
  },

  /* ══════════════ COAGULATION CASCADE & ANTICOAGULANTS ══════════════ */
  {
    stem: "Which coagulation factors are vitamin K dependent?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Factors II, VII, IX and X plus proteins C and S require vitamin K dependent gamma-carboxylation. Protein C has the shortest half-life, which is why warfarin can produce a transient prothrombotic state and skin necrosis before full anticoagulation is achieved.",
    choices: [
      { text: "II, VII, IX, X, protein C and protein S", isCorrect: true },
      { text: "I, V, VIII, XI and XIII" },
      { text: "VIII, IX, XI and XII only" },
      { text: "V, VII, VIII and X only" },
      { text: "XII, XI, IX and VIII only" },
    ],
  },
  {
    stem: "A patient starting warfarin develops skin necrosis on day 3. Which mechanism explains this?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Protein C has a half-life of about 8 hours, far shorter than factor II at roughly 60 hours, so its anticoagulant activity falls first and produces a transient hypercoagulable state. Bridging with heparin prevents this, and underlying protein C deficiency increases the risk.",
    choices: [
      { text: "Rapid fall in protein C creating transient hypercoagulability", isCorrect: true },
      { text: "Immediate depletion of factor II causing hemorrhagic necrosis" },
      { text: "Direct toxic effect of warfarin on dermal capillaries" },
      { text: "Heparin-induced platelet activation" },
      { text: "Vitamin K excess causing arterial thrombosis" },
    ],
  },
  {
    stem: "Which test monitors unfractionated heparin, and which pathway does it assess?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "aPTT assesses the intrinsic and common pathways and is used to monitor unfractionated heparin. PT/INR assesses the extrinsic and common pathways and monitors warfarin — pairing the wrong test with the wrong drug is a common and consequential error.",
    choices: [
      { text: "aPTT — intrinsic and common pathways", isCorrect: true },
      { text: "PT/INR — extrinsic and common pathways" },
      { text: "Thrombin time — fibrinogen conversion only" },
      { text: "Bleeding time — platelet function" },
      { text: "D-dimer — fibrinolysis" },
    ],
  },
  {
    stem: "Which of the following are reversal agents matched correctly to their anticoagulant? Select all that apply.",
    type: "MULTI",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Protamine reverses heparin, vitamin K plus four-factor PCC reverses warfarin, idarucizumab reverses dabigatran, and andexanet alfa reverses the factor Xa inhibitors. Protamine only partially reverses low-molecular-weight heparin, and there is no role for tranexamic acid as a specific antidote.",
    choices: [
      { text: "Protamine sulfate for unfractionated heparin", isCorrect: true },
      { text: "Vitamin K with four-factor prothrombin complex concentrate for warfarin", isCorrect: true },
      { text: "Idarucizumab for dabigatran", isCorrect: true },
      { text: "Protamine sulfate for rivaroxaban" },
      { text: "Tranexamic acid as a specific antidote for apixaban" },
    ],
  },
  {
    stem: "Heparin exerts its anticoagulant effect by which mechanism?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Heparin potentiates antithrombin III, accelerating inactivation of thrombin and factor Xa by roughly a thousandfold. It has no intrinsic anticoagulant activity, which is why antithrombin deficiency causes apparent heparin resistance.",
    choices: [
      { text: "Potentiation of antithrombin III against thrombin and factor Xa", isCorrect: true },
      { text: "Inhibition of vitamin K epoxide reductase" },
      { text: "Direct irreversible inhibition of thrombin's active site" },
      { text: "Blockade of the platelet P2Y12 receptor" },
      { text: "Activation of plasminogen to plasmin" },
    ],
  },
  {
    stem: "A patient's platelet count falls from 240,000 to 68,000/µL on day 6 of heparin, and he develops a new arterial thrombus. What is the diagnosis and the immediate action?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Heparin-induced thrombocytopenia is an antibody response to the heparin-PF4 complex that paradoxically causes thrombosis. All heparin must stop and a non-heparin anticoagulant such as argatroban or fondaparinux started — simply stopping heparin is insufficient because thrombotic risk persists.",
    choices: [
      { text: "HIT — stop all heparin and start a direct thrombin inhibitor", isCorrect: true },
      { text: "HIT — stop heparin and transfuse platelets" },
      { text: "Immune thrombocytopenic purpura — start corticosteroids" },
      { text: "Dilutional thrombocytopenia — continue heparin and observe" },
      { text: "DIC — start fresh frozen plasma and continue heparin" },
    ],
  },
  {
    stem: "True or False: Platelet transfusion is generally avoided in heparin-induced thrombocytopenia unless there is life-threatening bleeding.",
    type: "TRUE_FALSE",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "True. HIT is a prothrombotic disorder, and adding platelets may fuel thrombosis. The low count reflects consumption in clot rather than a bleeding tendency, so the instinct to transfuse must be resisted.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Tissue factor initiates which pathway, and with which factor does it form the initiating complex?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Tissue factor exposed by vascular injury binds factor VII to initiate the extrinsic pathway, which is the physiologic trigger of coagulation in vivo. The intrinsic pathway then amplifies the response, but initiation is extrinsic.",
    choices: [
      { text: "Extrinsic pathway, with factor VII", isCorrect: true },
      { text: "Intrinsic pathway, with factor XII" },
      { text: "Common pathway, with factor X directly" },
      { text: "Fibrinolytic pathway, with plasminogen" },
      { text: "Contact pathway, with prekallikrein" },
    ],
  },
  {
    stem: "Factor XIII performs which final step in clot formation?",
    topic: "Coagulation Cascade & Anticoagulants",
    explanation:
      "Factor XIIIa cross-links fibrin monomers into a stable insoluble mesh. Deficiency produces delayed bleeding and poor wound healing with entirely normal PT and aPTT, since those tests stop at clot formation rather than stabilization.",
    choices: [
      { text: "Cross-links fibrin monomers into a stable mesh", isCorrect: true },
      { text: "Converts prothrombin to thrombin" },
      { text: "Converts fibrinogen to fibrin monomer" },
      { text: "Activates protein C on the endothelial surface" },
      { text: "Degrades cross-linked fibrin into D-dimers" },
    ],
  },

  /* ══════════════ VIRCHOW'S TRIAD & THROMBOSIS ══════════════ */
  {
    stem: "Which three elements comprise Virchow's triad?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Endothelial injury, abnormal blood flow (stasis or turbulence), and hypercoagulability together determine thrombotic risk. Every clinical risk factor from immobility to malignancy maps onto one or more of these three.",
    choices: [
      { text: "Endothelial injury, abnormal blood flow, hypercoagulability", isCorrect: true },
      { text: "Platelet excess, fibrinogen excess, low antithrombin" },
      { text: "Inflammation, infection, immobility" },
      { text: "Arterial stenosis, venous dilation, lymphatic obstruction" },
      { text: "Hyperlipidemia, hypertension, hyperglycemia" },
    ],
  },
  {
    stem: "Lines of Zahn within a thrombus indicate what, and why does this matter forensically?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Alternating pale platelet-fibrin and dark red cell layers form only in flowing blood, so their presence proves the thrombus formed before death rather than being postmortem clot. This distinction is the classic autopsy application.",
    choices: [
      { text: "Formation in flowing blood, indicating an antemortem thrombus", isCorrect: true },
      { text: "Formation after death, indicating postmortem clot" },
      { text: "Infection within the thrombus" },
      { text: "Recanalization of an organized thrombus" },
      { text: "Embolization from a distant site" },
    ],
  },
  {
    stem: "Which of the following are recognized fates of a venous thrombus? Select all that apply.",
    type: "MULTI",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "A thrombus may undergo propagation, embolization, dissolution by fibrinolysis, or organization with recanalization. Transformation into a lipid-rich atherosclerotic plaque is not a recognized fate, nor does it become granulation tissue that regenerates the vessel lumen intact.",
    choices: [
      { text: "Propagation along the vessel", isCorrect: true },
      { text: "Embolization to a distant site", isCorrect: true },
      { text: "Organization with recanalization", isCorrect: true },
      { text: "Transformation into an atherosclerotic plaque" },
      { text: "Complete regeneration of normal vessel wall with no residue" },
    ],
  },
  {
    stem: "Arterial thrombi differ from venous thrombi in which respect?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Arterial thrombi form under high shear at sites of endothelial injury and are platelet-rich and pale — hence antiplatelet therapy. Venous thrombi form in stasis, are fibrin and red cell rich, and are treated with anticoagulation. The composition dictates the drug class.",
    choices: [
      { text: "Arterial thrombi are platelet-rich and pale; venous are red and fibrin-rich", isCorrect: true },
      { text: "Arterial thrombi are red and fibrin-rich; venous are platelet-rich" },
      { text: "Both have identical composition and treatment" },
      { text: "Arterial thrombi form exclusively from stasis" },
      { text: "Venous thrombi never embolize" },
    ],
  },
  {
    stem: "A patient develops a deep vein thrombosis after a 14-hour flight. Which element of Virchow's triad dominates?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Prolonged immobility causes venous stasis, allowing activated factors to accumulate rather than being cleared and permitting platelet contact with endothelium. Mild dehydration contributes but stasis is the dominant mechanism.",
    choices: [
      { text: "Stasis of venous blood flow", isCorrect: true },
      { text: "Direct endothelial injury from cabin pressure" },
      { text: "Inherited antithrombin deficiency" },
      { text: "Turbulence at an arterial bifurcation" },
      { text: "Platelet activation from hypoxia" },
    ],
  },
  {
    stem: "True or False: Mural thrombus in the left ventricle after anterior myocardial infarction can embolize to the systemic circulation.",
    type: "TRUE_FALSE",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "True. A dyskinetic infarcted wall creates stasis and injured endocardium, and thrombus forming there may embolize to brain, kidney, spleen or limbs. This risk is why anticoagulation is considered after large anterior infarcts with apical akinesis.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Migratory superficial thrombophlebitis appearing at successive sites in a 62-year-old smoker with weight loss suggests what?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Trousseau syndrome is a paraneoplastic hypercoagulable state classically associated with pancreatic adenocarcinoma and other mucin-producing tumors. Recognizing it should prompt a search for occult malignancy rather than local treatment alone.",
    choices: [
      { text: "Trousseau syndrome from an occult visceral malignancy", isCorrect: true },
      { text: "Superficial cellulitis requiring antibiotics" },
      { text: "Inherited factor V Leiden mutation" },
      { text: "Heparin-induced thrombocytopenia" },
      { text: "Vasculitis of medium-sized vessels" },
    ],
  },
  {
    stem: "Why does atrial fibrillation predispose to left atrial appendage thrombus?",
    topic: "Virchow's Triad & Thrombosis",
    explanation:
      "Loss of coordinated atrial contraction produces stasis, most marked in the trabeculated appendage. Resulting thrombus embolizes systemically, which is why stroke risk drives anticoagulation decisions in atrial fibrillation rather than symptoms.",
    choices: [
      { text: "Loss of coordinated contraction causes stasis in the appendage", isCorrect: true },
      { text: "Direct endothelial injury from the arrhythmia" },
      { text: "Inherited hypercoagulability accompanies the arrhythmia" },
      { text: "Turbulence across a stenotic aortic valve" },
      { text: "Platelet counts rise markedly in atrial fibrillation" },
    ],
  },

  /* ══════════════ THROMBOPHILIA ══════════════ */
  {
    stem: "Which inherited thrombophilia is most common in people of European descent, and what is its mechanism?",
    topic: "Thrombophilia",
    explanation:
      "Factor V Leiden is a point mutation rendering factor Va resistant to cleavage by activated protein C, so it persists and drives thrombin generation. It accounts for the majority of inherited thrombophilia in this population.",
    choices: [
      { text: "Factor V Leiden — resistance to activated protein C cleavage", isCorrect: true },
      { text: "Antithrombin III deficiency — failure of thrombin inhibition" },
      { text: "Protein C deficiency — failure to inactivate factors V and VIII" },
      { text: "Prothrombin G20210A — reduced prothrombin levels" },
      { text: "Homocystinuria — endothelial toxicity from methionine" },
    ],
  },
  {
    stem: "A patient requires escalating heparin doses without achieving a therapeutic aPTT. Which deficiency should be suspected?",
    topic: "Thrombophilia",
    explanation:
      "Heparin works by potentiating antithrombin III, so its deficiency produces apparent heparin resistance. Recognizing this changes management to antithrombin replacement or a direct thrombin inhibitor rather than simply increasing the heparin dose.",
    choices: [
      { text: "Antithrombin III deficiency", isCorrect: true },
      { text: "Protein C deficiency" },
      { text: "Protein S deficiency" },
      { text: "Factor V Leiden" },
      { text: "Plasminogen deficiency" },
    ],
  },
  {
    stem: "Which of the following are features of antiphospholipid syndrome? Select all that apply.",
    type: "MULTI",
    topic: "Thrombophilia",
    explanation:
      "Antiphospholipid syndrome causes arterial and venous thrombosis, recurrent pregnancy loss, and a paradoxically prolonged aPTT that does not correct on mixing. Thrombocytopenia is common. A shortened aPTT is not a feature, and it causes thrombosis rather than a bleeding tendency despite the lab result.",
    choices: [
      { text: "Both arterial and venous thrombosis", isCorrect: true },
      { text: "Recurrent fetal loss", isCorrect: true },
      { text: "Prolonged aPTT that fails to correct on mixing study", isCorrect: true },
      { text: "A characteristically shortened aPTT" },
      { text: "A clinical bleeding tendency proportional to the aPTT" },
    ],
  },
  {
    stem: "Why does antiphospholipid syndrome prolong the aPTT in vitro while causing thrombosis in vivo?",
    topic: "Thrombophilia",
    explanation:
      "The antibodies bind phospholipid used in the laboratory assay, interfering with clot formation in the tube, while in the body they activate endothelium and platelets and impair protein C function. The lab result is an artifact of the test, not a reflection of bleeding risk.",
    choices: [
      { text: "Antibodies interfere with assay phospholipid but activate endothelium in vivo", isCorrect: true },
      { text: "They consume factor VIII in the circulation" },
      { text: "They inhibit vitamin K dependent carboxylation" },
      { text: "They destroy platelets, causing both effects" },
      { text: "They activate plasminogen excessively" },
    ],
  },
  {
    stem: "Homocystinuria increases thrombotic risk through which mechanism?",
    topic: "Thrombophilia",
    explanation:
      "Elevated homocysteine is directly toxic to endothelium and promotes a prothrombotic surface, contributing to both arterial and venous events. The classic phenotype also includes marfanoid habitus with downward lens dislocation, distinguishing it from Marfan syndrome where the lens dislocates upward.",
    choices: [
      { text: "Direct endothelial toxicity from elevated homocysteine", isCorrect: true },
      { text: "Resistance of factor V to protein C" },
      { text: "Deficiency of antithrombin III" },
      { text: "Excess production of von Willebrand factor" },
      { text: "Impaired fibrinolysis from plasminogen deficiency" },
    ],
  },
  {
    stem: "True or False: Estrogen-containing contraceptives increase venous thrombosis risk chiefly by raising hepatic synthesis of procoagulant factors.",
    type: "TRUE_FALSE",
    topic: "Thrombophilia",
    explanation:
      "True. Estrogen increases factors II, VII, VIII, X and fibrinogen while lowering protein S, shifting the hemostatic balance toward thrombosis. This is why the risk multiplies dramatically in a woman who also carries factor V Leiden.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "When is thrombophilia testing best performed relative to an acute thrombotic event and anticoagulation?",
    topic: "Thrombophilia",
    explanation:
      "Acute thrombosis consumes protein C, protein S and antithrombin, and warfarin lowers proteins C and S while heparin lowers antithrombin — so testing during either produces false positives. Deferring until several weeks after anticoagulation stops avoids labeling a patient incorrectly for life.",
    choices: [
      { text: "Several weeks after stopping anticoagulation, remote from the acute event", isCorrect: true },
      { text: "Immediately at presentation, before any treatment" },
      { text: "During the first week of warfarin therapy" },
      { text: "While on therapeutic heparin infusion" },
      { text: "Timing does not affect the results" },
    ],
  },
  {
    stem: "A 26-year-old woman has had three first-trimester miscarriages and a prior DVT. Which single test panel is most appropriate first?",
    topic: "Thrombophilia",
    explanation:
      "The combination of recurrent early pregnancy loss with venous thrombosis points to antiphospholipid syndrome, tested with lupus anticoagulant, anticardiolipin and anti-beta-2 glycoprotein I antibodies. Confirmation requires persistence on repeat testing at least 12 weeks apart.",
    choices: [
      { text: "Lupus anticoagulant, anticardiolipin and anti-beta-2 glycoprotein I antibodies", isCorrect: true },
      { text: "Factor VIII activity and von Willebrand antigen" },
      { text: "Platelet aggregation studies with ristocetin" },
      { text: "Bone marrow biopsy with cytogenetics" },
      { text: "Serum ferritin and transferrin saturation" },
    ],
  },

  /* ══════════════ EMBOLISM ══════════════ */
  {
    stem: "Approximately what proportion of pulmonary emboli originate from deep veins of the lower extremity and pelvis?",
    topic: "Embolism",
    explanation:
      "The great majority — around 95% — arise from proximal deep veins of the leg and pelvis. This is why lower limb Doppler and prophylaxis strategies target that territory, and why calf-confined thrombi carry lower embolic risk.",
    choices: [
      { text: "About 95%", isCorrect: true },
      { text: "About 25%" },
      { text: "About 50%" },
      { text: "About 70%" },
      { text: "Fewer than 10%" },
    ],
  },
  {
    stem: "A saddle embolus lodging at the pulmonary artery bifurcation causes death by which mechanism?",
    topic: "Embolism",
    explanation:
      "Acute right ventricular outflow obstruction causes right heart failure with collapse of left ventricular preload and cardiac output. Death is hemodynamic rather than hypoxic, which explains why oxygen alone cannot rescue the patient.",
    choices: [
      { text: "Acute right ventricular outflow obstruction with loss of cardiac output", isCorrect: true },
      { text: "Progressive hypoxemia over several hours" },
      { text: "Pulmonary infarction of both lower lobes" },
      { text: "Left ventricular free wall rupture" },
      { text: "Massive intra-alveolar hemorrhage" },
    ],
  },
  {
    stem: "Why do most pulmonary emboli NOT cause pulmonary infarction?",
    topic: "Embolism",
    explanation:
      "The lung has dual blood supply from pulmonary and bronchial arteries, so bronchial flow usually sustains the tissue. Infarction occurs mainly when that collateral supply is already compromised, as in left heart failure — which is why infarction signals a sicker patient.",
    choices: [
      { text: "Dual supply from pulmonary and bronchial arteries", isCorrect: true },
      { text: "Alveolar oxygen diffuses directly into lung tissue" },
      { text: "The lung is a permanent tissue resistant to ischemia" },
      { text: "Pulmonary arteries recanalize within minutes" },
      { text: "Lymphatic flow substitutes for arterial supply" },
    ],
  },
  {
    stem: "Which organs are classic recipients of PARADOXICAL emboli, and what anatomic defect permits this? Select all that apply.",
    type: "MULTI",
    topic: "Embolism",
    explanation:
      "A patent foramen ovale or other right-to-left shunt allows venous thrombus to bypass the lungs and enter the systemic circulation, reaching brain, kidney, spleen and limbs. The lungs are the one territory such an embolus bypasses by definition.",
    choices: [
      { text: "Brain, via a patent foramen ovale", isCorrect: true },
      { text: "Kidney, via a right-to-left shunt", isCorrect: true },
      { text: "Lower limb arteries, via an atrial septal defect", isCorrect: true },
      { text: "Lungs, via a patent foramen ovale" },
      { text: "Portal vein, via the ductus venosus in adults" },
    ],
  },
  {
    stem: "A patient with acute pulmonary embolism has a normal chest radiograph and clear lungs on auscultation, yet PaO2 is 54 mmHg. Which mechanism explains the hypoxemia?",
    topic: "Embolism",
    explanation:
      "Obstructed segments are ventilated but not perfused, producing dead space, while blood is redistributed to other regions creating low ventilation-perfusion units and shunt. The mismatch explains hypoxemia despite normal-appearing lungs — a classic diagnostic pitfall.",
    choices: [
      { text: "Ventilation-perfusion mismatch with redistribution of flow", isCorrect: true },
      { text: "Alveolar hypoventilation from respiratory depression" },
      { text: "Diffusion impairment from alveolar wall thickening" },
      { text: "Reduced inspired oxygen fraction" },
      { text: "Methemoglobinemia from an oxidizing agent" },
    ],
  },
  {
    stem: "True or False: A negative D-dimer effectively excludes pulmonary embolism in a patient assessed as low clinical probability.",
    type: "TRUE_FALSE",
    topic: "Embolism",
    explanation:
      "True. D-dimer has high sensitivity and poor specificity, so its value lies in ruling out disease when pretest probability is low. In high-probability patients a negative result does not exclude PE and imaging is required regardless.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which EKG finding, though insensitive, is classically associated with acute pulmonary embolism?",
    topic: "Embolism",
    explanation:
      "S1Q3T3 reflects acute right heart strain but appears in only a minority of cases. Sinus tachycardia is far more common but nonspecific, so neither finding should be used to rule the diagnosis in or out.",
    choices: [
      { text: "S1Q3T3 pattern", isCorrect: true },
      { text: "Delta wave with short PR interval" },
      { text: "Diffuse concave ST elevation with PR depression" },
      { text: "Osborn J waves" },
      { text: "Electrical alternans" },
    ],
  },
  {
    stem: "An embolus lodging at the bifurcation of the common femoral artery produces which combination of findings?",
    topic: "Embolism",
    explanation:
      "Acute arterial occlusion produces the six Ps — pain, pallor, pulselessness, paresthesia, paralysis and poikilothermia. Onset is abrupt, which distinguishes it from the gradual claudication of chronic atherosclerotic disease.",
    choices: [
      { text: "Abrupt pain, pallor, pulselessness, paresthesia, paralysis and coldness", isCorrect: true },
      { text: "Gradual claudication worsening over months" },
      { text: "Warm erythematous swollen limb with fever" },
      { text: "Painless pitting edema of both legs" },
      { text: "Nocturnal cramping relieved by walking" },
    ],
  },

  /* ══════════════ SPECIAL EMBOLIC SYNDROMES ══════════════ */
  {
    stem: "A 22-year-old man with a femoral shaft fracture develops confusion, dyspnea and a petechial rash across the chest and axillae 36 hours after injury. What is the diagnosis?",
    topic: "Special Embolic Syndromes",
    explanation:
      "Fat embolism syndrome classically presents 24 to 72 hours after long bone fracture with the triad of hypoxemia, neurologic change and petechiae. The petechial rash in a non-dependent distribution is the most specific feature and typically appears last.",
    choices: [
      { text: "Fat embolism syndrome", isCorrect: true },
      { text: "Pulmonary thromboembolism" },
      { text: "Meningococcal septicemia" },
      { text: "Acute respiratory distress syndrome from transfusion" },
      { text: "Air embolism from central line placement" },
    ],
  },
  {
    stem: "A woman collapses during labor with sudden hypoxia, hypotension and profuse bleeding from her IV sites. Which diagnosis fits best?",
    topic: "Special Embolic Syndromes",
    explanation:
      "Amniotic fluid embolism causes cardiovascular collapse followed by disseminated intravascular coagulation, and the combination of catastrophic hemodynamic failure with immediate coagulopathy is characteristic. Mortality remains high and treatment is supportive.",
    choices: [
      { text: "Amniotic fluid embolism with DIC", isCorrect: true },
      { text: "Postpartum hemorrhage from uterine atony alone" },
      { text: "Eclampsia with seizure" },
      { text: "Pulmonary thromboembolism without coagulopathy" },
      { text: "Anaphylaxis to oxytocin" },
    ],
  },
  {
    stem: "Which volume of air entering the venous circulation is generally considered capable of causing significant harm in an adult?",
    topic: "Special Embolic Syndromes",
    explanation:
      "Roughly 100 mL or more is generally required for a clinically significant venous air embolism, though smaller volumes can be lethal if they reach the arterial circulation through a shunt. Positioning the patient left lateral and head-down is the classic maneuver.",
    choices: [
      { text: "About 100 mL or more", isCorrect: true },
      { text: "About 1 mL" },
      { text: "About 5 mL" },
      { text: "About 1,000 mL" },
      { text: "Any volume above 0.1 mL" },
    ],
  },
  {
    stem: "Decompression sickness results from which physical process, and which gas is chiefly implicated?",
    topic: "Special Embolic Syndromes",
    explanation:
      "Rapid decompression allows dissolved nitrogen to come out of solution and form gas bubbles in tissues and vessels. Chronic forms produce ischemic bone necrosis of the femoral and humeral heads, known as caisson disease.",
    choices: [
      { text: "Nitrogen coming out of solution as bubbles on rapid decompression", isCorrect: true },
      { text: "Oxygen toxicity generating free radicals at depth" },
      { text: "Carbon dioxide retention causing narcosis" },
      { text: "Helium expansion within the middle ear" },
      { text: "Carbon monoxide binding hemoglobin at pressure" },
    ],
  },
  {
    stem: "Which special embolic syndromes are matched correctly to their setting? Select all that apply.",
    type: "MULTI",
    topic: "Special Embolic Syndromes",
    explanation:
      "Fat embolism follows long bone fracture, amniotic fluid embolism complicates labor, air embolism follows central line manipulation or neurosurgery in the sitting position, and cholesterol embolism follows arterial catheterization. Tumor embolism is not a classic complication of routine venipuncture.",
    choices: [
      { text: "Fat embolism after femoral shaft fracture", isCorrect: true },
      { text: "Amniotic fluid embolism during labor", isCorrect: true },
      { text: "Cholesterol embolism after cardiac catheterization", isCorrect: true },
      { text: "Air embolism after routine peripheral venipuncture" },
      { text: "Amniotic fluid embolism after orthopedic surgery in men" },
    ],
  },
  {
    stem: "A patient develops livedo reticularis, blue toes with intact pulses, and rising creatinine days after coronary angiography. What is the mechanism?",
    topic: "Special Embolic Syndromes",
    explanation:
      "Catheter manipulation dislodges cholesterol crystals from aortic plaque, which shower into small arterioles. Pulses remain intact because only microvessels are occluded, and eosinophilia with low complement supports the diagnosis.",
    choices: [
      { text: "Cholesterol crystal embolization from disrupted aortic plaque", isCorrect: true },
      { text: "Large vessel thromboembolism from the left atrium" },
      { text: "Contrast-induced nephropathy alone" },
      { text: "Septic embolization from endocarditis" },
      { text: "Heparin-induced thrombocytopenia with thrombosis" },
    ],
  },
  {
    stem: "True or False: Septic emboli from left-sided infective endocarditis typically travel to the systemic circulation, while right-sided endocarditis embolizes to the lungs.",
    type: "TRUE_FALSE",
    topic: "Special Embolic Syndromes",
    explanation:
      "True. This anatomic logic explains why left-sided disease causes stroke and splenic infarcts, whereas right-sided disease — common in people who inject drugs — causes septic pulmonary emboli with multiple cavitating nodules.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },

  /* ══════════════ INFARCTION ══════════════ */
  {
    stem: "Which tissues characteristically develop RED (hemorrhagic) infarcts?",
    topic: "Infarction",
    explanation:
      "Loose tissues with dual blood supply or collateral circulation — lung, small intestine, testis — bleed into the infarcted zone. Solid organs with end-arterial supply such as heart, kidney and spleen produce pale infarcts instead.",
    choices: [
      { text: "Lung, small intestine and testis", isCorrect: true },
      { text: "Heart, kidney and spleen" },
      { text: "Brain, liver and thyroid" },
      { text: "Bone, cartilage and tendon" },
      { text: "Skin, adrenal cortex and pancreas" },
    ],
  },
  {
    stem: "Why is the myocardial subendocardium the first region to infarct in global hypoperfusion?",
    topic: "Infarction",
    explanation:
      "The subendocardium is farthest from epicardial coronary supply and is compressed during systole, so it has the least perfusion reserve. This is why demand ischemia produces subendocardial rather than transmural injury.",
    choices: [
      { text: "It is farthest from epicardial vessels and compressed during systole", isCorrect: true },
      { text: "It has the highest capillary density of the myocardium" },
      { text: "It receives blood directly from the ventricular cavity" },
      { text: "It has the lowest metabolic demand" },
      { text: "It is supplied exclusively by the left circumflex artery" },
    ],
  },
  {
    stem: "A wedge-shaped pale area with the apex pointing toward the hilum is found in a kidney. What does the shape reflect?",
    topic: "Infarction",
    explanation:
      "Infarcts follow the territory of the occluded vessel, and since renal arteries branch outward from the hilum, the resulting infarct is wedge-shaped with its apex at the occlusion and base at the capsule. The shape is a map of the vascular tree.",
    choices: [
      { text: "The distribution of the occluded arterial territory", isCorrect: true },
      { text: "The direction of venous drainage" },
      { text: "The pattern of lymphatic spread" },
      { text: "The plane of surgical section" },
      { text: "Random distribution unrelated to vasculature" },
    ],
  },
  {
    stem: "Which factors influence whether vascular occlusion produces infarction? Select all that apply.",
    type: "MULTI",
    topic: "Infarction",
    explanation:
      "Availability of an alternative blood supply, rate of occlusion development, tissue vulnerability to hypoxia, and blood oxygen content all determine outcome. Patient blood type and the color of the thrombus are irrelevant.",
    choices: [
      { text: "Presence of a dual or collateral blood supply", isCorrect: true },
      { text: "Rate at which the occlusion develops", isCorrect: true },
      { text: "Intrinsic tissue vulnerability to hypoxia", isCorrect: true },
      { text: "The patient's ABO blood group" },
      { text: "Whether the thrombus is pale or red" },
    ],
  },
  {
    stem: "True or False: A slowly developing arterial stenosis is less likely to infarct tissue than a sudden occlusion of the same vessel.",
    type: "TRUE_FALSE",
    topic: "Infarction",
    explanation:
      "True. Gradual narrowing permits collateral vessels to develop, whereas abrupt occlusion gives no time for that adaptation. This explains why a patient with severe chronic stenosis may have less myocardial damage than one with an acute plaque rupture.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "At what time after coronary occlusion do the first light microscopic changes of myocardial necrosis become visible?",
    topic: "Infarction",
    explanation:
      "Coagulative necrosis with wavy fibers and contraction bands becomes visible around 4 to 12 hours, though ultrastructural and biochemical changes occur far earlier. Nothing is visible on routine light microscopy in the first hours, which matters at autopsy in sudden death.",
    choices: [
      { text: "4 to 12 hours", isCorrect: true },
      { text: "5 to 10 minutes" },
      { text: "30 to 60 minutes" },
      { text: "3 to 5 days" },
      { text: "2 to 3 weeks" },
    ],
  },
  {
    stem: "Which complication is most likely 5 to 10 days after a transmural myocardial infarction, and why at that time?",
    topic: "Infarction",
    explanation:
      "Free wall rupture peaks at 5 to 10 days because macrophages have removed necrotic myocardium while granulation tissue has not yet provided tensile strength — the mechanical trough. Later complications such as aneurysm and Dressler syndrome occur weeks to months out.",
    choices: [
      { text: "Free wall rupture, during the macrophage-debridement trough in strength", isCorrect: true },
      { text: "Ventricular aneurysm, from mature scar" },
      { text: "Dressler syndrome, from autoimmune pericarditis" },
      { text: "Reperfusion arrhythmia, from restored flow" },
      { text: "Contraction band necrosis, from catecholamine excess" },
    ],
  },

  /* ══════════════ SHOCK ══════════════ */
  {
    stem: "A trauma patient has BP 78/50 mmHg, heart rate 132/min, cool clammy extremities, and jugular veins that are flat. Which shock state and hemodynamic profile fit?",
    topic: "Shock",
    explanation:
      "Hypovolemic shock produces low preload with flat neck veins, compensatory tachycardia and high systemic vascular resistance causing cool peripheries. Cardiogenic shock would show elevated venous pressure, and distributive shock warm peripheries with low resistance.",
    choices: [
      { text: "Hypovolemic — low preload, low cardiac output, high SVR", isCorrect: true },
      { text: "Cardiogenic — high preload, low output, high SVR" },
      { text: "Distributive — normal preload, high output, low SVR" },
      { text: "Obstructive — high preload, low output, high SVR" },
      { text: "Neurogenic — low preload, low output, high SVR" },
    ],
  },
  {
    stem: "Which shock state is characterized by WARM extremities, wide pulse pressure and high cardiac output?",
    topic: "Shock",
    explanation:
      "Distributive shock — most often septic — features profound vasodilation, so systemic vascular resistance falls and cardiac output rises to compensate. The warm periphery early in sepsis is a genuine diagnostic clue that distinguishes it from other shock states.",
    choices: [
      { text: "Distributive (septic) shock", isCorrect: true },
      { text: "Cardiogenic shock" },
      { text: "Hypovolemic shock" },
      { text: "Obstructive shock from tamponade" },
      { text: "Hemorrhagic shock class IV" },
    ],
  },
  {
    stem: "Which hemodynamic profiles are correctly matched? Select all that apply.",
    type: "MULTI",
    topic: "Shock",
    explanation:
      "Cardiogenic shock shows high filling pressures with low output and high resistance; septic shock low resistance with high output; hypovolemic shock low filling pressures with high resistance. Neurogenic shock is distinctive for bradycardia with hypotension rather than tachycardia, and anaphylactic shock has low rather than high resistance.",
    choices: [
      { text: "Cardiogenic — high PCWP, low cardiac output, high SVR", isCorrect: true },
      { text: "Septic — low SVR, high cardiac output", isCorrect: true },
      { text: "Neurogenic — hypotension with bradycardia and warm skin", isCorrect: true },
      { text: "Anaphylactic — high SVR with cold extremities" },
      { text: "Hypovolemic — high PCWP with low SVR" },
    ],
  },
  {
    stem: "A patient with a cervical spinal cord injury has BP 82/48 mmHg with a heart rate of 52/min and warm dry skin. Which mechanism explains the bradycardia?",
    topic: "Shock",
    explanation:
      "Loss of sympathetic outflow above T6 removes both vasomotor tone and cardiac sympathetic drive, leaving unopposed vagal input. The failure to mount a compensatory tachycardia is the feature that distinguishes neurogenic from hypovolemic shock at the bedside.",
    choices: [
      { text: "Loss of cardiac sympathetic outflow leaving unopposed vagal tone", isCorrect: true },
      { text: "Direct vagal stimulation by the injury itself" },
      { text: "Beta blocker effect from released catecholamines" },
      { text: "Hypothermia-induced sinus node suppression" },
      { text: "Hyperkalemia from muscle injury" },
    ],
  },
  {
    stem: "A patient in shock has distended neck veins, muffled heart sounds and hypotension. Which condition and mechanism?",
    topic: "Shock",
    explanation:
      "Beck's triad indicates cardiac tamponade, an obstructive shock in which pericardial fluid prevents diastolic filling. Preload is high upstream but ventricular filling is mechanically limited, so fluids help only marginally and drainage is definitive.",
    choices: [
      { text: "Cardiac tamponade — obstructive shock from impaired diastolic filling", isCorrect: true },
      { text: "Septic shock — distributive, from vasodilation" },
      { text: "Hemorrhagic shock — hypovolemic, from blood loss" },
      { text: "Anaphylaxis — distributive, from mast cell degranulation" },
      { text: "Neurogenic shock — from loss of sympathetic tone" },
    ],
  },
  {
    stem: "Which laboratory value best reflects tissue hypoperfusion and is used to track resuscitation adequacy?",
    topic: "Shock",
    explanation:
      "Serum lactate reflects anaerobic metabolism from inadequate oxygen delivery, and clearance over the first hours predicts outcome. Hemoglobin and sodium do not track perfusion, and a normal blood pressure can coexist with severe occult hypoperfusion.",
    choices: [
      { text: "Serum lactate", isCorrect: true },
      { text: "Serum sodium" },
      { text: "Hemoglobin concentration" },
      { text: "Serum albumin" },
      { text: "Total bilirubin" },
    ],
  },
  {
    stem: "True or False: Blood pressure may remain normal in early shock because of compensatory vasoconstriction and tachycardia.",
    type: "TRUE_FALSE",
    topic: "Shock",
    explanation:
      "True. Compensated shock maintains pressure while perfusion is already inadequate, which is why tachycardia, narrowed pulse pressure, cool skin and rising lactate matter more than a single blood pressure reading. Waiting for hypotension means waiting too long.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which organ injury pattern characterizes the irreversible stage of shock?",
    topic: "Shock",
    explanation:
      "Irreversible shock features acute tubular necrosis, ischemic bowel with bacterial translocation, hepatic centrilobular necrosis and diffuse alveolar damage — multiorgan failure that persists despite restored hemodynamics. The defining point is that correcting the pressure no longer rescues the organs.",
    choices: [
      { text: "Multiorgan failure persisting despite corrected hemodynamics", isCorrect: true },
      { text: "Isolated reversible renal impairment" },
      { text: "Transient hepatic transaminase elevation only" },
      { text: "Compensated tachycardia with normal organ function" },
      { text: "Reversible cerebral edema alone" },
    ],
  },
  {
    stem: "In septic shock, which mediator is chiefly responsible for the profound vasodilation?",
    topic: "Shock",
    explanation:
      "TNF and IL-1 induce inducible nitric oxide synthase, and the resulting nitric oxide causes vasodilation that is often refractory to catecholamines. This underlies the use of vasopressin as an adjunct when norepinephrine alone is insufficient.",
    choices: [
      { text: "Nitric oxide from induced nitric oxide synthase", isCorrect: true },
      { text: "Thromboxane A2 from activated platelets" },
      { text: "Angiotensin II from renin release" },
      { text: "Endothelin-1 from injured endothelium" },
      { text: "Norepinephrine from the adrenal medulla" },
    ],
  },

  /* ══════════════ DIC ══════════════ */
  {
    stem: "Which laboratory pattern is characteristic of disseminated intravascular coagulation?",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "DIC consumes platelets and factors while activating fibrinolysis, so PT and aPTT are prolonged, platelets and fibrinogen fall, and D-dimer rises. A normal fibrinogen with isolated thrombocytopenia points elsewhere, such as ITP or TTP.",
    choices: [
      { text: "Prolonged PT and aPTT, low platelets, low fibrinogen, high D-dimer", isCorrect: true },
      { text: "Normal PT and aPTT, low platelets, normal fibrinogen" },
      { text: "Prolonged PT only, normal platelets, high fibrinogen" },
      { text: "Prolonged aPTT correcting on mixing, normal platelets" },
      { text: "All parameters normal with isolated anemia" },
    ],
  },
  {
    stem: "Which conditions commonly precipitate DIC? Select all that apply.",
    type: "MULTI",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "Gram-negative sepsis, obstetric catastrophes such as abruption and amniotic fluid embolism, major trauma with tissue factor release, and acute promyelocytic leukemia are classic triggers. Iron deficiency anemia and mild viral illness do not cause DIC.",
    choices: [
      { text: "Gram-negative sepsis", isCorrect: true },
      { text: "Placental abruption or amniotic fluid embolism", isCorrect: true },
      { text: "Acute promyelocytic leukemia", isCorrect: true },
      { text: "Iron deficiency anemia" },
      { text: "Uncomplicated viral upper respiratory infection" },
    ],
  },
  {
    stem: "Why do patients with DIC bleed and clot simultaneously?",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "Widespread activation deposits microthrombi that cause ischemic organ injury, while consuming platelets and clotting factors so that hemostasis fails elsewhere. Treating only the bleeding without addressing the underlying trigger is therefore futile.",
    choices: [
      { text: "Widespread microthrombosis consumes platelets and factors, leaving deficiency", isCorrect: true },
      { text: "Two independent disorders coexist by coincidence" },
      { text: "Fibrinolysis is completely suppressed throughout" },
      { text: "Platelet function is normal but count is elevated" },
      { text: "Only the extrinsic pathway is activated" },
    ],
  },
  {
    stem: "A blood smear in DIC characteristically shows which red cell abnormality?",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "Schistocytes form as red cells are sheared passing through fibrin strands in microvessels — the microangiopathic hemolytic picture shared with TTP and HUS. Their presence supports the diagnosis and signals ongoing microvascular thrombosis.",
    choices: [
      { text: "Schistocytes from microangiopathic hemolysis", isCorrect: true },
      { text: "Target cells from liver disease" },
      { text: "Spherocytes from immune hemolysis" },
      { text: "Howell-Jolly bodies from hyposplenism" },
      { text: "Basophilic stippling from lead exposure" },
    ],
  },
  {
    stem: "True or False: The cornerstone of DIC management is treating the underlying precipitating condition.",
    type: "TRUE_FALSE",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "True. Blood product support and occasionally heparin are adjuncts, but DIC continues until the trigger — sepsis, obstetric catastrophe, malignancy — is controlled. This is why the diagnosis should always prompt a search for the cause.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which malignancy is most classically associated with DIC at presentation, and why?",
    topic: "Disseminated Intravascular Coagulation",
    explanation:
      "Acute promyelocytic leukemia releases procoagulant granule contents from abnormal promyelocytes, triggering DIC that can worsen at the start of chemotherapy. All-trans retinoic acid induces differentiation and reduces this risk, which is why it is started urgently on suspicion.",
    choices: [
      { text: "Acute promyelocytic leukemia — procoagulant granule release", isCorrect: true },
      { text: "Chronic lymphocytic leukemia — lymphocyte accumulation" },
      { text: "Hodgkin lymphoma — Reed-Sternberg cells" },
      { text: "Multiple myeloma — light chain deposition" },
      { text: "Hairy cell leukemia — marrow fibrosis" },
    ],
  },

  /* ══════════════ COAGULATION LAB INTERPRETATION ══════════════ */
  {
    stem: "A patient has PT 13 seconds (normal), aPTT 68 seconds (prolonged), normal platelet count, and the aPTT corrects fully on a 1:1 mixing study. What does this indicate?",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Correction on mixing indicates factor deficiency rather than an inhibitor, since normal plasma supplies the missing factor. An isolated prolonged aPTT points to the intrinsic pathway — factors VIII, IX or XI. Failure to correct would instead suggest an inhibitor such as lupus anticoagulant.",
    choices: [
      { text: "An intrinsic pathway factor deficiency such as VIII, IX or XI", isCorrect: true },
      { text: "An inhibitor such as lupus anticoagulant" },
      { text: "Vitamin K deficiency affecting the extrinsic pathway" },
      { text: "Disseminated intravascular coagulation" },
      { text: "A platelet function defect" },
    ],
  },
  {
    stem: "A malnourished alcohol-dependent patient has PT 22 seconds, INR 2.1, aPTT 45 seconds, normal platelets and fibrinogen. Which explanation fits best?",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Vitamin K deficiency affects factors II, VII, IX and X, and because factor VII has the shortest half-life the PT prolongs first with the aPTT following. Normal fibrinogen and platelets argue against DIC, and this pattern corrects with vitamin K.",
    choices: [
      { text: "Vitamin K deficiency, with factor VII falling first", isCorrect: true },
      { text: "Disseminated intravascular coagulation" },
      { text: "Hemophilia A presenting in adulthood" },
      { text: "Antiphospholipid syndrome" },
      { text: "Isolated factor XIII deficiency" },
    ],
  },
  {
    stem: "Which findings would you expect in a patient with severe hemophilia A? Select all that apply.",
    type: "MULTI",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Hemophilia A produces prolonged aPTT with normal PT, normal platelet count and bleeding time, low factor VIII activity, and deep bleeding into joints and muscles. Petechiae and mucocutaneous bleeding are features of platelet disorders rather than factor deficiency.",
    choices: [
      { text: "Prolonged aPTT with normal PT", isCorrect: true },
      { text: "Reduced factor VIII activity", isCorrect: true },
      { text: "Hemarthrosis and deep muscle hematomas", isCorrect: true },
      { text: "Widespread petechiae" },
      { text: "Prolonged bleeding time with low platelet count" },
    ],
  },
  {
    stem: "A prolonged aPTT that does NOT correct on mixing study, in a patient with thrombosis rather than bleeding, suggests what?",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Failure to correct indicates an inhibitor, and the combination with thrombosis rather than bleeding points to lupus anticoagulant in antiphospholipid syndrome. A factor VIII inhibitor would instead present with severe bleeding.",
    choices: [
      { text: "Lupus anticoagulant in antiphospholipid syndrome", isCorrect: true },
      { text: "Factor IX deficiency (hemophilia B)" },
      { text: "Vitamin K deficiency" },
      { text: "von Willebrand disease type 1" },
      { text: "Factor XIII deficiency" },
    ],
  },
  {
    stem: "A patient has normal PT, aPTT, platelet count and bleeding time but delayed bleeding from wounds after 24 hours and poor healing. Which deficiency should be considered?",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Factor XIII cross-links fibrin after the clot has formed, so standard tests — which measure clot formation — are all normal. Delayed rebleeding with impaired wound healing is the characteristic presentation and requires a specific urea clot solubility test.",
    choices: [
      { text: "Factor XIII deficiency", isCorrect: true },
      { text: "Factor VIII deficiency" },
      { text: "von Willebrand disease" },
      { text: "Vitamin K deficiency" },
      { text: "Antithrombin III deficiency" },
    ],
  },
  {
    stem: "True or False: A raised D-dimer is specific for venous thromboembolism.",
    type: "TRUE_FALSE",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "False. D-dimer rises in infection, malignancy, trauma, surgery, pregnancy, advanced age and DIC. Its usefulness lies in a negative result excluding thromboembolism in low-probability patients, not in a positive result confirming it.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "A patient on warfarin has an INR of 8.2 with no bleeding. Which principle guides management?",
    topic: "Coagulation Lab Interpretation",
    explanation:
      "Management is graded by both INR and bleeding status: without bleeding, warfarin is withheld and oral vitamin K considered, whereas major bleeding requires four-factor prothrombin complex concentrate plus intravenous vitamin K. Fresh frozen plasma is slower and volume-heavy, so it is not first choice when PCC is available.",
    choices: [
      { text: "Withhold warfarin and consider oral vitamin K; reserve PCC for major bleeding", isCorrect: true },
      { text: "Give four-factor PCC immediately regardless of bleeding" },
      { text: "Continue the current dose and recheck in one week" },
      { text: "Transfuse platelets to correct the INR" },
      { text: "Start heparin to counteract the warfarin effect" },
    ],
  },
];
