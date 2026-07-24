/**
 * CONTENT WAVE 14 — Gastroenterology & Hepatology
 *
 * 60 original questions:
 *   PRACTICE  Set 1 (30) · Set 2 (30)
 *   EXAMS     Exam 1 (30, 40 min) · Exam 2 (60, 75 min)
 *
 * ⚠ ANSWER SHUFFLING IS BUILT IN.
 * Every earlier wave wrote the correct answer first and never shuffled, so all
 * 788 questions had the answer at position A — trivially gameable. This seed
 * shuffles each question's choices before writing, so the fault cannot recur.
 *
 * Run:  npx tsx prisma/seed-gastroenterology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 — Upper GI, Lower GI, Emergencies ═══════════ */

const SET1: Q[] = [
  {
    stem: "A patient has retrosternal burning worse lying flat and after meals, relieved by antacids. What is the diagnosis?",
    topic: "Oesophageal Disease",
    explanation:
      "Gastro-oesophageal reflux disease. Acid refluxes through a weakened lower oesophageal sphincter, and posture explains the pattern. Alarm features — dysphagia, weight loss, anaemia, vomiting or age with new symptoms — change the approach and warrant endoscopy rather than empirical treatment.",
    choices: [
      { text: "Gastro-oesophageal reflux disease", isCorrect: true },
      { text: "Achalasia", isCorrect: false },
      { text: "Oesophageal carcinoma", isCorrect: false },
      { text: "Peptic ulcer disease", isCorrect: false },
    ],
  },
  {
    stem: "Which change occurs in Barrett's oesophagus, and why does it matter?",
    topic: "Oesophageal Disease",
    explanation:
      "Squamous epithelium is replaced by columnar epithelium — intestinal metaplasia in response to chronic acid exposure. It matters because metaplasia can progress through dysplasia to adenocarcinoma, which is why Barrett's is kept under endoscopic surveillance.",
    choices: [
      { text: "Squamous to columnar metaplasia, which can progress to adenocarcinoma", isCorrect: true },
      { text: "Columnar to squamous change, which is protective", isCorrect: false },
      { text: "Complete loss of epithelium", isCorrect: false },
      { text: "Muscular hypertrophy of the oesophagus", isCorrect: false },
    ],
  },
  {
    stem: "A patient has progressive dysphagia to solids then liquids, with weight loss. What must be excluded?",
    topic: "Oesophageal Disease",
    explanation:
      "Oesophageal carcinoma. The PROGRESSION from solids to liquids suggests a mechanical, enlarging obstruction. Achalasia by contrast causes dysphagia to solids AND liquids from the outset, because the problem is failure of relaxation rather than a narrowing lumen.",
    choices: [
      { text: "Oesophageal carcinoma — progression from solids to liquids suggests mechanical obstruction", isCorrect: true },
      { text: "Achalasia, which always begins with solids only", isCorrect: false },
      { text: "Simple reflux", isCorrect: false },
      { text: "Globus sensation", isCorrect: false },
    ],
  },
  {
    stem: "Which organism is the major cause of peptic ulcer disease, and how is it detected non-invasively?",
    topic: "Peptic Ulcer Disease",
    explanation:
      "Helicobacter pylori, detected by urea breath test or stool antigen. The breath test exploits its urease, which splits labelled urea into detectable CO2. Proton pump inhibitors and antibiotics must be stopped beforehand or the test gives false negatives.",
    choices: [
      { text: "Helicobacter pylori — urea breath test or stool antigen", isCorrect: true },
      { text: "Escherichia coli — stool culture", isCorrect: false },
      { text: "Campylobacter jejuni — serology", isCorrect: false },
      { text: "Candida albicans — endoscopy only", isCorrect: false },
    ],
  },
  {
    stem: "How does NSAID use cause peptic ulceration?",
    topic: "Peptic Ulcer Disease",
    explanation:
      "By inhibiting COX-1, which produces the prostaglandins maintaining gastric mucus, bicarbonate and mucosal blood flow. The mucosa loses its defences against its own acid. This is a systemic effect, so enteric-coated or parenteral NSAIDs are not protective.",
    choices: [
      { text: "COX-1 inhibition removes prostaglandin-mediated mucosal protection", isCorrect: true },
      { text: "They directly increase acid secretion", isCorrect: false },
      { text: "Local contact irritation only, avoided by enteric coating", isCorrect: false },
      { text: "They promote H. pylori growth", isCorrect: false },
    ],
  },
  {
    stem: "A patient presents with haematemesis and melaena with hypotension. What is the immediate priority?",
    topic: "GI Bleeding",
    explanation:
      "Resuscitation — large-bore access, fluids and blood as required — before endoscopy. The commonest error is rushing to diagnose while the patient is still shocked. Endoscopy follows once stabilised, and risk scores help decide urgency and disposition.",
    choices: [
      { text: "Resuscitate first with access, fluids and blood; endoscopy once stabilised", isCorrect: true },
      { text: "Immediate endoscopy before any resuscitation", isCorrect: false },
      { text: "CT abdomen as the first step", isCorrect: false },
      { text: "Oral proton pump inhibitor and discharge", isCorrect: false },
    ],
  },
  {
    stem: "A patient with known cirrhosis has a large-volume haematemesis. Which source is most likely, and what changes management?",
    topic: "GI Bleeding",
    explanation:
      "Oesophageal varices from portal hypertension. Management adds terlipressin and prophylactic antibiotics before endoscopy, with band ligation as definitive treatment — a different pathway from non-variceal bleeding. Antibiotics improve survival independently, which is easily forgotten.",
    choices: [
      { text: "Variceal bleeding — add terlipressin and prophylactic antibiotics", isCorrect: true },
      { text: "Peptic ulcer — proton pump infusion alone", isCorrect: false },
      { text: "Mallory-Weiss tear — conservative management", isCorrect: false },
      { text: "Gastric carcinoma — urgent surgery", isCorrect: false },
    ],
  },
  {
    stem: "A young patient vomits repeatedly then produces fresh blood. What is the likely cause?",
    topic: "GI Bleeding",
    explanation:
      "A Mallory-Weiss tear — a mucosal laceration at the gastro-oesophageal junction from forceful retching. The history of vomiting BEFORE the blood is the clue. Most settle spontaneously, in contrast to Boerhaave syndrome where full-thickness rupture causes severe chest pain and surgical emphysema.",
    choices: [
      { text: "Mallory-Weiss tear — vomiting precedes the blood", isCorrect: true },
      { text: "Bleeding peptic ulcer", isCorrect: false },
      { text: "Oesophageal varices", isCorrect: false },
      { text: "Boerhaave syndrome", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish Crohn's disease from ulcerative colitis?",
    topic: "Inflammatory Bowel Disease",
    explanation:
      "Crohn's is transmural with skip lesions, can affect anywhere from mouth to anus, and shows non-caseating granulomas. UC is mucosal, continuous from the rectum, and confined to the colon. Transmural involvement is precisely why Crohn's produces fistulae, abscesses and strictures while UC does not.",
    choices: [
      { text: "Crohn's is transmural with skip lesions; UC is mucosal and continuous from the rectum", isCorrect: true },
      { text: "Crohn's is mucosal and continuous; UC is transmural", isCorrect: false },
      { text: "Both are confined to the colon", isCorrect: false },
      { text: "UC characteristically causes fistulae", isCorrect: false },
    ],
  },
  {
    stem: "A patient with ulcerative colitis has more than six bloody stools daily with fever and tachycardia. What does this represent?",
    topic: "Inflammatory Bowel Disease",
    explanation:
      "Acute severe colitis — a medical emergency needing admission, intravenous steroids and daily monitoring. Toxic megacolon is the feared complication, so serial abdominal radiographs and examination matter. Antimotility drugs and opiates must be avoided as they precipitate it.",
    choices: [
      { text: "Acute severe colitis — admit for intravenous steroids and monitor for toxic megacolon", isCorrect: true },
      { text: "Mild flare — increase oral mesalazine at home", isCorrect: false },
      { text: "Infective gastroenteritis — antibiotics alone", isCorrect: false },
      { text: "Irritable bowel syndrome", isCorrect: false },
    ],
  },
  {
    stem: "Why must infection be excluded before escalating immunosuppression in an IBD flare?",
    topic: "Inflammatory Bowel Disease",
    explanation:
      "Because C. difficile and CMV colitis mimic a flare exactly, and immunosuppressing an infection makes it dramatically worse. Stool culture and C. difficile testing are standard in any significant flare — the presentations are indistinguishable clinically.",
    choices: [
      { text: "C. difficile and CMV mimic a flare, and immunosuppression would worsen them", isCorrect: true },
      { text: "Infection makes steroids less effective but is otherwise harmless", isCorrect: false },
      { text: "It is purely a documentation requirement", isCorrect: false },
      { text: "Infection never coexists with IBD", isCorrect: false },
    ],
  },
  {
    stem: "Which extraintestinal manifestation of IBD runs independently of bowel disease activity?",
    topic: "Inflammatory Bowel Disease",
    explanation:
      "Primary sclerosing cholangitis, along with ankylosing spondylitis — these persist regardless of how the bowel is doing. Erythema nodosum and peripheral arthritis, by contrast, track disease activity and improve when the bowel settles.",
    choices: [
      { text: "Primary sclerosing cholangitis", isCorrect: true },
      { text: "Erythema nodosum", isCorrect: false },
      { text: "Peripheral arthritis", isCorrect: false },
      { text: "Episcleritis", isCorrect: false },
    ],
  },
  {
    stem: "Which antibody testing is used to screen for coeliac disease, and what must the patient be doing?",
    topic: "Malabsorption",
    explanation:
      "Anti-tissue transglutaminase IgA, with total IgA measured alongside because selective IgA deficiency gives false negatives. Critically, the patient must still be eating gluten — a gluten-free diet normalises both serology and histology and makes diagnosis impossible.",
    choices: [
      { text: "Anti-tTG IgA with total IgA — the patient must still be eating gluten", isCorrect: true },
      { text: "Anti-tTG IgA, valid on a gluten-free diet", isCorrect: false },
      { text: "Faecal calprotectin", isCorrect: false },
      { text: "Anti-mitochondrial antibody", isCorrect: false },
    ],
  },
  {
    stem: "Which histological findings characterise coeliac disease?",
    topic: "Malabsorption",
    explanation:
      "Villous atrophy, crypt hyperplasia and intraepithelial lymphocytosis in the duodenum. Loss of villous surface area causes malabsorption, explaining the iron, folate and fat-soluble vitamin deficiencies — the histology maps directly onto the clinical picture.",
    choices: [
      { text: "Villous atrophy, crypt hyperplasia and intraepithelial lymphocytosis", isCorrect: true },
      { text: "Villous hypertrophy with crypt atrophy", isCorrect: false },
      { text: "Non-caseating granulomas", isCorrect: false },
      { text: "Normal architecture with surface inflammation only", isCorrect: false },
    ],
  },
  {
    stem: "A patient has bloating, flatulence and diarrhoea after dairy, with normal endoscopy. What is the likely diagnosis?",
    topic: "Malabsorption",
    explanation:
      "Lactose intolerance from lactase deficiency. Undigested lactose reaches the colon where bacteria ferment it, producing gas and an osmotic diarrhoea. It is common in adults worldwide, and secondary lactase deficiency also follows gastroenteritis or coeliac disease.",
    choices: [
      { text: "Lactose intolerance", isCorrect: true },
      { text: "Coeliac disease", isCorrect: false },
      { text: "Crohn's disease", isCorrect: false },
      { text: "Pancreatic insufficiency", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest irritable bowel syndrome rather than organic disease?",
    topic: "Functional Disorders",
    explanation:
      "Abdominal pain related to defaecation with changed stool form or frequency, bloating, and symptoms over months without alarm features — no weight loss, rectal bleeding, anaemia, nocturnal symptoms or family history of bowel cancer or IBD. It is a positive diagnosis, not merely one of exclusion.",
    choices: [
      { text: "Pain related to defaecation with altered stool form, and no alarm features", isCorrect: true },
      { text: "Nocturnal diarrhoea waking the patient", isCorrect: false },
      { text: "Unintentional weight loss", isCorrect: false },
      { text: "Rectal bleeding with anaemia", isCorrect: false },
    ],
  },
  {
    stem: "What does faecal calprotectin measure, and how is it used?",
    topic: "Investigation",
    explanation:
      "Neutrophil migration into the bowel lumen, so it is a marker of intestinal INFLAMMATION. Its main value is distinguishing IBD from IBS in younger patients without alarm features, sparing many an unnecessary colonoscopy. It does not distinguish IBD from infection or malignancy.",
    choices: [
      { text: "Intestinal inflammation — useful for separating IBD from IBS", isCorrect: true },
      { text: "Pancreatic exocrine function", isCorrect: false },
      { text: "Occult blood in the stool", isCorrect: false },
      { text: "Bacterial overgrowth specifically", isCorrect: false },
    ],
  },
  {
    stem: "A patient over 50 has iron deficiency anaemia with no obvious bleeding source. What should be arranged?",
    topic: "Investigation",
    explanation:
      "Investigation of both upper and lower GI tracts — endoscopy and colonoscopy — because occult malignancy is the concern. Right-sided colonic tumours in particular bleed occultly and present with anaemia rather than obstruction or visible blood.",
    choices: [
      { text: "Both upper and lower GI endoscopy to exclude malignancy", isCorrect: true },
      { text: "Oral iron and repeat the blood count in a year", isCorrect: false },
      { text: "Dietary advice alone", isCorrect: false },
      { text: "Abdominal ultrasound only", isCorrect: false },
    ],
  },
  {
    stem: "Which condition should be suspected in an elderly patient with painless massive rectal bleeding?",
    topic: "Lower GI Bleeding",
    explanation:
      "Diverticular bleeding, the commonest cause of major lower GI haemorrhage. It is typically painless — in contrast to diverticulitis, which is painful and febrile but rarely bleeds heavily. Angiodysplasia is the other major consideration in this age group.",
    choices: [
      { text: "Diverticular bleeding", isCorrect: true },
      { text: "Acute diverticulitis", isCorrect: false },
      { text: "Haemorrhoids", isCorrect: false },
      { text: "Anal fissure", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient has left-sided abdominal pain with bloody diarrhoea after an episode of hypotension. What is the likely diagnosis?",
    topic: "Vascular Disorders",
    explanation:
      "Ischaemic colitis, typically affecting watershed areas such as the splenic flexure where collateral supply is weakest. It usually follows a hypotensive episode and is often self-limiting, unlike acute mesenteric ischaemia which threatens the whole midgut.",
    choices: [
      { text: "Ischaemic colitis affecting a watershed area", isCorrect: true },
      { text: "Ulcerative colitis", isCorrect: false },
      { text: "Diverticulitis", isCorrect: false },
      { text: "Infective colitis", isCorrect: false },
    ],
  },
  {
    stem: "Which infection causes profuse watery diarrhoea after antibiotic use and requires specific treatment?",
    topic: "GI Infection",
    explanation:
      "Clostridioides difficile. Treatment is oral vancomycin or fidaxomicin — and notably intravenous vancomycin does NOT work, because it never reaches the colonic lumen where the organism lives. Alcohol gel does not kill the spores, so soap and water is required.",
    choices: [
      { text: "C. difficile — oral vancomycin or fidaxomicin, not intravenous", isCorrect: true },
      { text: "C. difficile — intravenous vancomycin is preferred", isCorrect: false },
      { text: "Salmonella — treat all cases with ciprofloxacin", isCorrect: false },
      { text: "Norovirus — treat with metronidazole", isCorrect: false },
    ],
  },
  {
    stem: "Why are antimotility agents avoided in bloody diarrhoea?",
    topic: "GI Infection",
    explanation:
      "They prolong contact with invasive organisms and toxins, increasing the risk of toxic megacolon and — with Shiga toxin-producing E. coli — haemolytic uraemic syndrome. Antibiotics are also generally avoided in suspected STEC for the same reason.",
    choices: [
      { text: "They prolong toxin exposure, risking toxic megacolon and haemolytic uraemic syndrome", isCorrect: true },
      { text: "They are simply ineffective", isCorrect: false },
      { text: "They cause dehydration", isCorrect: false },
      { text: "There is no reason to avoid them", isCorrect: false },
    ],
  },
  {
    stem: "Which screening approach is used for colorectal cancer in the general population?",
    topic: "Colorectal Cancer",
    explanation:
      "Faecal immunochemical testing at intervals, with colonoscopy for positive results. It works because colorectal cancer develops through a slow adenoma-carcinoma sequence — removing a polyp PREVENTS a cancer rather than merely detecting it early, which few screening programmes can claim.",
    choices: [
      { text: "Faecal immunochemical testing, with colonoscopy if positive", isCorrect: true },
      { text: "Annual CT of the abdomen for everyone", isCorrect: false },
      { text: "Serum CEA measurement", isCorrect: false },
      { text: "No screening is effective", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited syndrome causes hundreds of colonic polyps with near-certain malignancy?",
    topic: "Colorectal Cancer",
    explanation:
      "Familial adenomatous polyposis, from APC mutation. Cancer is effectively inevitable without prophylactic colectomy in early adulthood. Lynch syndrome differs — mismatch repair defects with far fewer polyps but accelerated progression, and extracolonic cancers including endometrial.",
    choices: [
      { text: "Familial adenomatous polyposis", isCorrect: true },
      { text: "Lynch syndrome", isCorrect: false },
      { text: "Peutz-Jeghers syndrome", isCorrect: false },
      { text: "Juvenile polyposis", isCorrect: false },
    ],
  },
  {
    stem: "How does the site of a colorectal tumour affect its presentation?",
    topic: "Colorectal Cancer",
    explanation:
      "Right-sided tumours present with occult bleeding and anaemia because the caecum is capacious and the stool liquid. Left-sided tumours obstruct earlier and cause visible bleeding and altered bowel habit, since the lumen is narrower and the stool formed.",
    choices: [
      { text: "Right-sided: anaemia from occult loss. Left-sided: obstruction and visible bleeding", isCorrect: true },
      { text: "Right-sided: early obstruction. Left-sided: anaemia", isCorrect: false },
      { text: "Site makes no difference to presentation", isCorrect: false },
      { text: "Both always present with obstruction", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of proton pump inhibitors, and what are the concerns with long-term use?",
    topic: "GI Pharmacology",
    explanation:
      "They irreversibly inhibit the gastric H+/K+ ATPase. Long-term concerns include C. difficile and other enteric infections, hypomagnesaemia, B12 and iron malabsorption, and fracture risk. They are often continued indefinitely without review, which is where most of the harm arises.",
    choices: [
      { text: "Irreversible H+/K+ ATPase inhibition — risks include infection, hypomagnesaemia and malabsorption", isCorrect: true },
      { text: "Histamine H2 receptor blockade with no long-term concerns", isCorrect: false },
      { text: "Direct acid neutralisation", isCorrect: false },
      { text: "They coat the mucosa physically", isCorrect: false },
    ],
  },
  {
    stem: "Which class of laxative works by drawing water into the bowel lumen?",
    topic: "GI Pharmacology",
    explanation:
      "Osmotic laxatives such as macrogol and lactulose. Stimulant laxatives increase motility, and bulk-forming agents add fibre and require adequate fluid intake to work — giving a bulk-forming laxative without fluids can worsen constipation and risks obstruction.",
    choices: [
      { text: "Osmotic laxatives such as macrogol and lactulose", isCorrect: true },
      { text: "Stimulant laxatives such as senna", isCorrect: false },
      { text: "Bulk-forming agents such as ispaghula", isCorrect: false },
      { text: "Softeners such as docusate", isCorrect: false },
    ],
  },
  {
    stem: "Why is lactulose used specifically in hepatic encephalopathy?",
    topic: "GI Pharmacology",
    explanation:
      "It acidifies the colon, converting ammonia to ammonium which is not absorbed, and it speeds transit so less nitrogenous material is absorbed. It is therefore treating the ammonia rather than the constipation — which is why the dose is titrated to stool frequency.",
    choices: [
      { text: "It acidifies the colon, trapping ammonia as non-absorbable ammonium", isCorrect: true },
      { text: "It kills ammonia-producing bacteria directly", isCorrect: false },
      { text: "It replaces liver function", isCorrect: false },
      { text: "It is used purely to relieve constipation", isCorrect: false },
    ],
  },
  {
    stem: "A patient has severe epigastric pain radiating to the back with a raised serum amylase. What is the diagnosis, and what determines outcome?",
    topic: "Pancreatic Disease",
    explanation:
      "Acute pancreatitis. Amylase level does NOT predict severity — scoring systems using age, white count, urea, calcium, glucose, albumin and oxygenation do. Early aggressive fluid resuscitation and identifying the cause are what change outcome.",
    choices: [
      { text: "Acute pancreatitis — severity is scored on physiology, not on the amylase level", isCorrect: true },
      { text: "Acute pancreatitis — the higher the amylase, the worse the outcome", isCorrect: false },
      { text: "Perforated ulcer", isCorrect: false },
      { text: "Biliary colic", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest chronic pancreatitis rather than recurrent acute episodes?",
    topic: "Pancreatic Disease",
    explanation:
      "Persistent pain with exocrine and endocrine failure — steatorrhoea, weight loss and diabetes — with calcification on imaging. Amylase is often NORMAL in chronic disease because too little functioning tissue remains, which catches people out.",
    choices: [
      { text: "Steatorrhoea, diabetes and pancreatic calcification, often with a normal amylase", isCorrect: true },
      { text: "A markedly raised amylase in every episode", isCorrect: false },
      { text: "Complete resolution between episodes", isCorrect: false },
      { text: "Absence of any imaging abnormality", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 — Hepatology ═══════════ */

const SET2: Q[] = [
  {
    stem: "Which pattern of liver function tests indicates a CHOLESTATIC picture?",
    topic: "LFT Interpretation",
    explanation:
      "Alkaline phosphatase and gamma-GT raised disproportionately to the transaminases. A hepatitic picture is the reverse — ALT and AST predominate. The pattern directs investigation: cholestatic points to biliary obstruction and prompts ultrasound; hepatitic points to hepatocellular injury.",
    choices: [
      { text: "ALP and gamma-GT raised out of proportion to the transaminases", isCorrect: true },
      { text: "ALT and AST raised out of proportion to ALP", isCorrect: false },
      { text: "Isolated raised bilirubin with normal enzymes", isCorrect: false },
      { text: "Low albumin alone", isCorrect: false },
    ],
  },
  {
    stem: "Which liver tests actually reflect SYNTHETIC function?",
    topic: "LFT Interpretation",
    explanation:
      "Albumin, prothrombin time/INR, and bilirubin. Transaminases indicate hepatocyte INJURY, not function — a failing liver with few remaining hepatocytes can have near-normal transaminases. Prothrombin time is the most sensitive acute marker, since clotting factors have short half-lives.",
    choices: [
      { text: "Albumin, prothrombin time and bilirubin", isCorrect: true },
      { text: "ALT and AST", isCorrect: false },
      { text: "Alkaline phosphatase", isCorrect: false },
      { text: "Gamma-GT alone", isCorrect: false },
    ],
  },
  {
    stem: "A patient has an isolated raised bilirubin that rises with fasting or illness, with otherwise normal tests. What is the likely diagnosis?",
    topic: "Jaundice",
    explanation:
      "Gilbert syndrome — reduced UDP-glucuronosyltransferase activity causing mild unconjugated hyperbilirubinaemia. It is benign, needs no treatment, and requires no further investigation once other causes are excluded. Recognising it prevents years of unnecessary testing.",
    choices: [
      { text: "Gilbert syndrome — benign and needing no treatment", isCorrect: true },
      { text: "Haemolysis requiring urgent investigation", isCorrect: false },
      { text: "Biliary obstruction", isCorrect: false },
      { text: "Early cirrhosis", isCorrect: false },
    ],
  },
  {
    stem: "How does the pattern of urine and stool help classify jaundice?",
    topic: "Jaundice",
    explanation:
      "Dark urine with pale stools indicates CONJUGATED hyperbilirubinaemia with obstruction — conjugated bilirubin is water-soluble and enters urine, while none reaches the gut. Unconjugated jaundice, as in haemolysis, leaves urine and stool normal because unconjugated bilirubin is not water-soluble.",
    choices: [
      { text: "Dark urine with pale stools indicates conjugated hyperbilirubinaemia with obstruction", isCorrect: true },
      { text: "Dark urine with pale stools indicates haemolysis", isCorrect: false },
      { text: "Urine and stool colour are unhelpful", isCorrect: false },
      { text: "Pale urine with dark stools indicates obstruction", isCorrect: false },
    ],
  },
  {
    stem: "Which hepatitis viruses can cause CHRONIC infection?",
    topic: "Viral Hepatitis",
    explanation:
      "B, C and D — D only alongside B, since it needs the B surface antigen to replicate. A and E are faecal-oral and self-limiting, though E is particularly dangerous in pregnancy. Chronicity matters because it drives cirrhosis and hepatocellular carcinoma.",
    choices: [
      { text: "Hepatitis B, C and D (D only with B)", isCorrect: true },
      { text: "Hepatitis A and E", isCorrect: false },
      { text: "All five equally", isCorrect: false },
      { text: "Only hepatitis C", isCorrect: false },
    ],
  },
  {
    stem: "A patient is HBsAg positive, anti-HBc positive and anti-HBs negative. What does this indicate?",
    topic: "Viral Hepatitis",
    explanation:
      "Current hepatitis B infection — surface antigen present means the virus is there. Anti-HBs would indicate immunity, and its absence with HBsAg present confirms ongoing infection. IgM anti-HBc distinguishes acute from chronic.",
    choices: [
      { text: "Current hepatitis B infection", isCorrect: true },
      { text: "Vaccination-derived immunity", isCorrect: false },
      { text: "Resolved past infection", isCorrect: false },
      { text: "No exposure to hepatitis B", isCorrect: false },
    ],
  },
  {
    stem: "A patient is HBsAg negative, anti-HBs positive and anti-HBc NEGATIVE. What does this indicate?",
    topic: "Viral Hepatitis",
    explanation:
      "Vaccination. The vaccine contains surface antigen only, so it produces anti-HBs without anti-HBc — core antigen is encountered only during genuine infection. That single marker distinguishes vaccine immunity from resolved natural infection.",
    choices: [
      { text: "Immunity from vaccination", isCorrect: true },
      { text: "Resolved natural infection", isCorrect: false },
      { text: "Chronic infection", isCorrect: false },
      { text: "Acute infection", isCorrect: false },
    ],
  },
  {
    stem: "Why has the outlook for hepatitis C changed so markedly?",
    topic: "Viral Hepatitis",
    explanation:
      "Direct-acting antivirals cure the great majority with a short oral course and few side effects, replacing lengthy interferon regimens. This makes case-finding genuinely worthwhile — identifying infection now leads to cure rather than to prolonged, poorly tolerated treatment.",
    choices: [
      { text: "Direct-acting antivirals cure most people with a short, well-tolerated oral course", isCorrect: true },
      { text: "A vaccine has been introduced", isCorrect: false },
      { text: "It now resolves spontaneously in most cases", isCorrect: false },
      { text: "The outlook is unchanged", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of transaminases suggests alcohol-related liver disease?",
    topic: "Alcohol-Related Liver Disease",
    explanation:
      "An AST:ALT ratio above 2, often with a raised gamma-GT and macrocytosis. Most other liver diseases show ALT exceeding AST. The ratio arises partly from pyridoxine deficiency, which affects ALT synthesis more than AST.",
    choices: [
      { text: "AST:ALT ratio above 2, with raised gamma-GT and macrocytosis", isCorrect: true },
      { text: "ALT greatly exceeding AST", isCorrect: false },
      { text: "Isolated raised alkaline phosphatase", isCorrect: false },
      { text: "Normal transaminases in all cases", isCorrect: false },
    ],
  },
  {
    stem: "Which stage of alcohol-related liver disease is reversible?",
    topic: "Alcohol-Related Liver Disease",
    explanation:
      "Steatosis (fatty liver) reverses with abstinence, and alcoholic hepatitis can improve substantially. Cirrhosis, with established fibrosis and nodular regeneration, is not reversible — though stopping alcohol still improves survival markedly even at that stage.",
    choices: [
      { text: "Steatosis is reversible; cirrhosis is not, though abstinence still helps", isCorrect: true },
      { text: "Cirrhosis reverses fully with abstinence", isCorrect: false },
      { text: "No stage is reversible", isCorrect: false },
      { text: "All stages reverse within weeks", isCorrect: false },
    ],
  },
  {
    stem: "Which condition is now among the commonest causes of abnormal liver tests worldwide?",
    topic: "Fatty Liver Disease",
    explanation:
      "Non-alcoholic fatty liver disease, associated with obesity, type 2 diabetes and metabolic syndrome. Most have simple steatosis, but a subset develop steatohepatitis with fibrosis and progress to cirrhosis. Weight reduction remains the main effective intervention.",
    choices: [
      { text: "Non-alcoholic fatty liver disease", isCorrect: true },
      { text: "Autoimmune hepatitis", isCorrect: false },
      { text: "Wilson's disease", isCorrect: false },
      { text: "Primary biliary cholangitis", isCorrect: false },
    ],
  },
  {
    stem: "Which features define decompensated cirrhosis?",
    topic: "Cirrhosis",
    explanation:
      "Jaundice, ascites, variceal bleeding and hepatic encephalopathy — the complications of portal hypertension and synthetic failure. Compensated cirrhosis may be entirely asymptomatic for years, so decompensation often marks the first presentation.",
    choices: [
      { text: "Jaundice, ascites, variceal bleeding and encephalopathy", isCorrect: true },
      { text: "Any abnormal liver enzyme", isCorrect: false },
      { text: "Fatty change on ultrasound", isCorrect: false },
      { text: "A single raised bilirubin", isCorrect: false },
    ],
  },
  {
    stem: "Why does cirrhosis cause ascites?",
    topic: "Cirrhosis",
    explanation:
      "Portal hypertension raises hydrostatic pressure while low albumin lowers oncotic pressure, and splanchnic vasodilatation triggers renal sodium and water retention through the renin-angiotensin system. All three combine — which is why salt restriction and spironolactone are central, not just diuresis.",
    choices: [
      { text: "Portal hypertension, low albumin and secondary sodium retention combined", isCorrect: true },
      { text: "Excess albumin production", isCorrect: false },
      { text: "Reduced portal pressure", isCorrect: false },
      { text: "Direct peritoneal inflammation", isCorrect: false },
    ],
  },
  {
    stem: "A patient with ascites develops fever and abdominal pain. Which diagnosis must be excluded, and how?",
    topic: "Cirrhosis",
    explanation:
      "Spontaneous bacterial peritonitis, diagnosed by diagnostic paracentesis showing a neutrophil count above 250 cells/mm³. Presentation can be subtle — encephalopathy or renal impairment alone. Any cirrhotic patient deteriorating with ascites should have a tap.",
    choices: [
      { text: "Spontaneous bacterial peritonitis — diagnostic paracentesis with neutrophil count", isCorrect: true },
      { text: "Simple ascites — increase diuretics", isCorrect: false },
      { text: "Gastroenteritis — antibiotics without tapping", isCorrect: false },
      { text: "No investigation is needed unless very unwell", isCorrect: false },
    ],
  },
  {
    stem: "What precipitates hepatic encephalopathy, and why does identifying the trigger matter?",
    topic: "Cirrhosis",
    explanation:
      "Infection, GI bleeding, constipation, electrolyte disturbance, dehydration, sedatives and renal impairment. It matters because encephalopathy is usually the SYMPTOM of a precipitant — treating with lactulose while missing an underlying infection or bleed leaves the real problem untreated.",
    choices: [
      { text: "Infection, bleeding, constipation, electrolytes or sedatives — the trigger is the real problem", isCorrect: true },
      { text: "It arises spontaneously with no precipitant", isCorrect: false },
      { text: "Only dietary protein causes it", isCorrect: false },
      { text: "It is always irreversible", isCorrect: false },
    ],
  },
  {
    stem: "Why are patients with cirrhosis screened regularly with ultrasound?",
    topic: "Cirrhosis",
    explanation:
      "To detect hepatocellular carcinoma early, when curative treatment is still possible. Cirrhosis of any cause carries a substantial annual risk. Six-monthly ultrasound is the usual approach, and it is one of the clearest examples of surveillance changing outcomes.",
    choices: [
      { text: "To detect hepatocellular carcinoma while it is still treatable", isCorrect: true },
      { text: "To monitor spleen size only", isCorrect: false },
      { text: "To measure ascites volume", isCorrect: false },
      { text: "Screening has no proven benefit", isCorrect: false },
    ],
  },
  {
    stem: "A middle-aged woman has itching, fatigue, a cholestatic picture and anti-mitochondrial antibodies. What is the diagnosis?",
    topic: "Autoimmune Liver Disease",
    explanation:
      "Primary biliary cholangitis — autoimmune destruction of small intrahepatic bile ducts. Anti-mitochondrial antibody is highly specific. Ursodeoxycholic acid slows progression, and pruritus is often the most troubling symptom for the patient.",
    choices: [
      { text: "Primary biliary cholangitis", isCorrect: true },
      { text: "Primary sclerosing cholangitis", isCorrect: false },
      { text: "Autoimmune hepatitis", isCorrect: false },
      { text: "Gallstone obstruction", isCorrect: false },
    ],
  },
  {
    stem: "Which liver condition is strongly associated with ulcerative colitis and carries cholangiocarcinoma risk?",
    topic: "Autoimmune Liver Disease",
    explanation:
      "Primary sclerosing cholangitis — fibrosing inflammation of intra- and extrahepatic ducts giving a beaded appearance on MRCP. It runs INDEPENDENTLY of bowel disease activity, so colectomy does not cure it, and it raises risk of both cholangiocarcinoma and colorectal cancer.",
    choices: [
      { text: "Primary sclerosing cholangitis", isCorrect: true },
      { text: "Primary biliary cholangitis", isCorrect: false },
      { text: "Non-alcoholic fatty liver disease", isCorrect: false },
      { text: "Haemochromatosis", isCorrect: false },
    ],
  },
  {
    stem: "A young patient has liver disease with neuropsychiatric features and Kayser-Fleischer rings. What is the diagnosis?",
    topic: "Metabolic Liver Disease",
    explanation:
      "Wilson's disease — impaired biliary copper excretion causing accumulation in liver, brain and cornea. Caeruloplasmin is low with raised urinary copper. It is treatable with chelation, so it must be considered in any young person with unexplained liver disease.",
    choices: [
      { text: "Wilson's disease", isCorrect: true },
      { text: "Haemochromatosis", isCorrect: false },
      { text: "Alpha-1 antitrypsin deficiency", isCorrect: false },
      { text: "Autoimmune hepatitis", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited condition causes iron overload with diabetes, skin pigmentation and arthropathy?",
    topic: "Metabolic Liver Disease",
    explanation:
      "Hereditary haemochromatosis, from HFE mutation causing excessive intestinal iron absorption. Ferritin and transferrin saturation are raised. Venesection is simple, effective and prevents cirrhosis if started early — making early diagnosis genuinely valuable.",
    choices: [
      { text: "Hereditary haemochromatosis", isCorrect: true },
      { text: "Wilson's disease", isCorrect: false },
      { text: "Gilbert syndrome", isCorrect: false },
      { text: "Primary biliary cholangitis", isCorrect: false },
    ],
  },
  {
    stem: "Which liver condition should be considered in a young non-smoker with basal emphysema?",
    topic: "Metabolic Liver Disease",
    explanation:
      "Alpha-1 antitrypsin deficiency. Abnormal protein accumulates in hepatocytes causing liver disease, while its absence in the lung leaves neutrophil elastase unopposed — producing early basal emphysema. One defect, two very different organ consequences.",
    choices: [
      { text: "Alpha-1 antitrypsin deficiency", isCorrect: true },
      { text: "Haemochromatosis", isCorrect: false },
      { text: "Wilson's disease", isCorrect: false },
      { text: "Hepatitis C", isCorrect: false },
    ],
  },
  {
    stem: "Which is the most common cause of acute liver failure in many countries, and what is the antidote?",
    topic: "Acute Liver Failure",
    explanation:
      "Paracetamol overdose, treated with N-acetylcysteine. It works by replenishing glutathione, which conjugates the toxic metabolite NAPQI. Efficacy is time-dependent — best within 8 hours — but it is still given late, and staggered or uncertain-timing overdoses are treated regardless.",
    choices: [
      { text: "Paracetamol overdose — N-acetylcysteine replenishes glutathione", isCorrect: true },
      { text: "Hepatitis A — no antidote exists", isCorrect: false },
      { text: "Alcohol — treated with thiamine", isCorrect: false },
      { text: "Aspirin overdose — treated with bicarbonate", isCorrect: false },
    ],
  },
  {
    stem: "Which factors increase the risk of paracetamol hepatotoxicity at a given dose?",
    topic: "Acute Liver Failure",
    explanation:
      "Chronic alcohol use, malnutrition and eating disorders, and enzyme-inducing drugs such as carbamazepine and rifampicin. Induction produces more toxic metabolite while depleted glutathione stores mean less capacity to neutralise it — both arms of the same mechanism.",
    choices: [
      { text: "Chronic alcohol use, malnutrition and enzyme-inducing drugs", isCorrect: true },
      { text: "Young age alone", isCorrect: false },
      { text: "Taking it with food", isCorrect: false },
      { text: "Nothing modifies the risk", isCorrect: false },
    ],
  },
  {
    stem: "Which features indicate poor prognosis in acute liver failure?",
    topic: "Acute Liver Failure",
    explanation:
      "Worsening coagulopathy with a rising prothrombin time, encephalopathy, acidosis and renal failure. Prothrombin time is the most useful marker because clotting factors have short half-lives — it reflects synthetic function in real time and guides transplant referral.",
    choices: [
      { text: "Rising prothrombin time, encephalopathy, acidosis and renal failure", isCorrect: true },
      { text: "The peak transaminase level alone", isCorrect: false },
      { text: "Bilirubin in isolation", isCorrect: false },
      { text: "Nausea and vomiting", isCorrect: false },
    ],
  },
  {
    stem: "Why should vitamin K not be given routinely to correct a raised INR in acute liver failure?",
    topic: "Acute Liver Failure",
    explanation:
      "Because the INR is a crucial prognostic marker, and correcting it — with vitamin K or plasma — masks the trend used to assess severity and decide on transplantation. A trial of vitamin K may be given to exclude deficiency, but routine correction without a bleeding indication removes the most useful signal available.",
    choices: [
      { text: "It masks the INR trend used to judge severity and transplant need", isCorrect: true },
      { text: "Vitamin K is hepatotoxic", isCorrect: false },
      { text: "It causes thrombosis in all patients", isCorrect: false },
      { text: "It has no effect on any coagulopathy", isCorrect: false },
    ],
  },
  {
    stem: "Which imaging is first line for suspected gallstones?",
    topic: "Biliary Disease",
    explanation:
      "Abdominal ultrasound — sensitive for gallbladder stones, non-invasive and without radiation. MRCP is used when duct stones are suspected but not seen, and ERCP is reserved for when intervention is intended, since it carries a real risk of pancreatitis.",
    choices: [
      { text: "Abdominal ultrasound", isCorrect: true },
      { text: "ERCP as the first investigation", isCorrect: false },
      { text: "Plain abdominal radiograph", isCorrect: false },
      { text: "CT without contrast", isCorrect: false },
    ],
  },
  {
    stem: "Why is ERCP not used as a purely diagnostic test?",
    topic: "Biliary Disease",
    explanation:
      "It carries a significant risk of post-procedure pancreatitis, plus bleeding and perforation. MRCP gives comparable diagnostic information non-invasively, so ERCP is reserved for when a therapeutic intervention — stone extraction or stenting — is planned.",
    choices: [
      { text: "It risks post-ERCP pancreatitis, so MRCP is used for diagnosis instead", isCorrect: true },
      { text: "It is less accurate than ultrasound", isCorrect: false },
      { text: "It cannot visualise the bile ducts", isCorrect: false },
      { text: "It requires general anaesthesia in all cases", isCorrect: false },
    ],
  },
  {
    stem: "A patient has painless progressive jaundice with weight loss and a palpable gallbladder. What does Courvoisier's law suggest?",
    topic: "Pancreatic & Biliary Malignancy",
    explanation:
      "A palpable, non-tender gallbladder with jaundice is unlikely to be due to gallstones — chronic stone disease leaves the gallbladder fibrotic and unable to distend. It therefore points toward malignant obstruction, classically pancreatic head carcinoma.",
    choices: [
      { text: "Malignant obstruction is more likely than stones", isCorrect: true },
      { text: "Gallstones are the most likely cause", isCorrect: false },
      { text: "The jaundice is haemolytic", isCorrect: false },
      { text: "The finding has no diagnostic value", isCorrect: false },
    ],
  },
  {
    stem: "Why does pancreatic carcinoma usually present late?",
    topic: "Pancreatic & Biliary Malignancy",
    explanation:
      "Early symptoms are vague — non-specific back or abdominal discomfort, weight loss, new diabetes — and the pancreas lies retroperitoneally with room to grow silently. By the time jaundice or pain appears, the disease is often locally advanced. New-onset diabetes in an older adult with weight loss deserves attention.",
    choices: [
      { text: "Vague early symptoms and a retroperitoneal position allowing silent growth", isCorrect: true },
      { text: "It grows extremely slowly over decades", isCorrect: false },
      { text: "Effective screening exists but is not offered", isCorrect: false },
      { text: "It causes obstructive symptoms very early", isCorrect: false },
    ],
  },
  {
    stem: "Which vaccination is particularly important for patients with chronic liver disease?",
    topic: "Preventive Care",
    explanation:
      "Hepatitis A and B vaccination, since superimposed acute hepatitis on chronic liver disease can precipitate decompensation or acute-on-chronic failure. Influenza and pneumococcal vaccination are also recommended, as infection is a common precipitant of decompensation.",
    choices: [
      { text: "Hepatitis A and B — superimposed acute hepatitis can precipitate decompensation", isCorrect: true },
      { text: "No vaccination is indicated in liver disease", isCorrect: false },
      { text: "Only tetanus", isCorrect: false },
      { text: "Live vaccines are preferred in this group", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

function isTransient(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  const m = e.message.toLowerCase();
  return (
    m.includes("p1001") || m.includes("p1017") ||
    m.includes("can't reach database") || m.includes("closed the connection") ||
    m.includes("connection") || m.includes("econnreset") || m.includes("timed out")
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  for (let i = 1; i <= 5; i++) {
    try {
      return await fn();
    } catch (e) {
      if (!isTransient(e) || i === 5) throw e;
      console.log(`    … connection dropped on ${label}, retrying in ${i * 2}s`);
      await new Promise((r) => setTimeout(r, i * 2000));
    }
  }
  throw new Error("unreachable");
}

/**
 * Shuffles choices before writing.
 *
 * Every earlier wave wrote the correct answer first and never shuffled, so all
 * 788 questions had the answer at position A. Doing this at write time means
 * that fault cannot recur.
 */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function seedSet(o: {
  categorySlug: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
}) {
  const category = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } }),
    "find category"
  );
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug, title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
          difficulty: o.difficulty, published: true,
        },
        update: {
          title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );
  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    const opts = shuffled(q.choices); // ← the fix
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Gastroenterology & Hepatology…\n");
  const CAT = "cs-gastroenterology";

  await seedSet({
    categorySlug: CAT, slug: "gastroenterology-practice-set-1",
    title: "Gastroenterology — Practice Set 1",
    description: "Thirty questions on oesophageal and peptic ulcer disease, GI bleeding, inflammatory bowel disease, malabsorption, colorectal cancer, GI infection and pharmacology. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "gastroenterology-practice-set-2",
    title: "Hepatology — Practice Set 2",
    description: "Thirty fresh questions on interpreting liver tests, jaundice, viral hepatitis and serology, alcohol and fatty liver disease, cirrhosis and its complications, autoimmune and metabolic liver disease, acute liver failure and biliary disease. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categorySlug: CAT, slug: "gastroenterology-exam-1",
    title: "Gastroenterology — Timed Exam 1",
    description: "Thirty questions in 40 minutes covering luminal gastroenterology. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 40 * 60, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "gastroenterology-exam-2",
    title: "Gastroenterology & Hepatology — Timed Exam 2 (Comprehensive)",
    description: "All sixty questions in 75 minutes, covering both luminal disease and hepatology. Sit this once both practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 75 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
