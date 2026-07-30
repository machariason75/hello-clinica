/**
 * CONTENT WAVE — Dermatology
 *
 * Creates the section as well as filling it. There was no Dermatology node under
 * Clinical Specialties, so this seed adds one the same way Haematology did:
 *
 *   Clinical Specialties → Dermatology   (slug: cs-dermatology)
 *
 * If the section already exists it is reused, not duplicated.
 *
 *   Practice Set 1 (30)  → skin structure, eczema, psoriasis, acne, infections
 *   Practice Set 2 (30)  → skin cancer, pigment, blistering, drug eruptions,
 *                          hair/nails and systemic signs
 *   Timed Exam 1   (30)  → Set 1 under exam conditions, 40 minutes
 *   Timed Exam 2   (60)  → everything, 75 minutes
 *
 * A DELIBERATE EMPHASIS: several questions address how conditions present in
 * richly pigmented skin — erythema being hard to see, post-inflammatory
 * pigment change being the dominant complaint, keloid risk, and the
 * presentations of melanoma that are actually common in African patients.
 * Standard textbooks describe pale skin by default, so students trained on them
 * misjudge severity and miss diagnoses in the patients they will actually see.
 *
 * Answers are SHUFFLED on insert — the correct choice is written first below for
 * readability, and inserting in that order would put it at position 1 every time.
 *
 * ⚠ Treatment specifics and drug availability vary by national guideline and
 * formulary. These questions test recognition and mechanism, which travel — but
 * check anything about first-line agents against local guidance. All editable in
 * Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-dermatology.ts
 * Safe to re-run — reuses the section, upserts by quiz slug.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ PRACTICE SET 1 ═══════════════ */

const SET1: Q[] = [
  /* ---- Skin Structure & Function ---- */
  {
    stem: "Which layer of the epidermis contains actively dividing cells?",
    topic: "Skin Structure & Function",
    explanation:
      "The stratum basale, the deepest layer, sitting on the basement membrane. Cells produced there migrate upward over roughly four weeks, keratinising as they go, and are shed from the stratum corneum. Conditions that accelerate this transit — psoriasis above all — produce scale because cells reach the surface before maturing properly.",
    choices: [
      { text: "Stratum basale", isCorrect: true },
      { text: "Stratum corneum", isCorrect: false },
      { text: "Stratum granulosum", isCorrect: false },
      { text: "Stratum lucidum", isCorrect: false },
    ],
  },
  {
    stem: "What determines skin colour differences between individuals?",
    topic: "Skin Structure & Function",
    explanation:
      "The amount and type of melanin produced, and how melanosomes are distributed — not the number of melanocytes, which is broadly similar across populations. In richly pigmented skin melanosomes are larger and more dispersed rather than more numerous, and they degrade more slowly in keratinocytes.",
    choices: [
      { text: "Melanin quantity, type and melanosome distribution, not melanocyte number", isCorrect: true },
      { text: "The total number of melanocytes present", isCorrect: false },
      { text: "The thickness of the stratum corneum", isCorrect: false },
      { text: "The density of hair follicles", isCorrect: false },
    ],
  },
  {
    stem: "Why is erythema harder to assess in richly pigmented skin, and what should be relied on instead?",
    topic: "Skin Structure & Function",
    explanation:
      "Melanin masks the red of dermal vasodilatation, so inflammation may look violaceous, grey or simply darker rather than red. Severity is better judged by palpation for warmth and induration, by scale and lichenification, and by asking the patient — under-reading severity because the skin does not look red is a common and consequential error.",
    choices: [
      { text: "Melanin masks redness; rely on warmth, induration, scale and the patient's account", isCorrect: true },
      { text: "Erythema does not occur in pigmented skin", isCorrect: false },
      { text: "Redness is always more obvious, so assessment is easier", isCorrect: false },
      { text: "Only laboratory testing can assess inflammation", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal function of the stratum corneum?",
    topic: "Skin Structure & Function",
    explanation:
      "Barrier function — restricting water loss outward and preventing entry of microbes and irritants. Corneocytes embedded in an intercellular lipid matrix form the classic brick-and-mortar arrangement. Barrier failure underlies atopic eczema, which is why emollients are treatment rather than merely comfort.",
    choices: [
      { text: "Barrier: restricting water loss and blocking microbes and irritants", isCorrect: true },
      { text: "Producing melanin for photoprotection", isCorrect: false },
      { text: "Sensing temperature and touch", isCorrect: false },
      { text: "Supplying blood to the epidermis", isCorrect: false },
    ],
  },
  {
    stem: "How do you describe a flat, non-palpable area of colour change larger than 1 cm?",
    topic: "Skin Structure & Function",
    explanation:
      "A patch — the larger counterpart of a macule. A papule is a small raised lesion and a plaque its larger equivalent. Precise terminology is not pedantry: a referral describing 'a rash' conveys almost nothing, while 'annular scaly plaques' narrows the differential immediately.",
    choices: [
      { text: "Patch", isCorrect: true },
      { text: "Plaque", isCorrect: false },
      { text: "Papule", isCorrect: false },
      { text: "Nodule", isCorrect: false },
    ],
  },
  {
    stem: "Which skin structure is responsible for thermoregulatory sweating?",
    topic: "Skin Structure & Function",
    explanation:
      "Eccrine glands, distributed over almost the entire body surface and innervated by sympathetic cholinergic fibres. Apocrine glands open into hair follicles in the axillae and groin, become active at puberty and are not thermoregulatory — they are the glands involved in hidradenitis suppurativa and body odour.",
    choices: [
      { text: "Eccrine glands", isCorrect: true },
      { text: "Apocrine glands", isCorrect: false },
      { text: "Sebaceous glands", isCorrect: false },
      { text: "Hair follicles alone", isCorrect: false },
    ],
  },

  /* ---- Eczema & Dermatitis ---- */
  {
    stem: "What is the fundamental defect underlying atopic eczema?",
    topic: "Eczema & Dermatitis",
    explanation:
      "Impaired epidermal barrier function, often with filaggrin mutations, combined with immune dysregulation. Water is lost and allergens and microbes enter more readily, driving inflammation and itch. This is precisely why emollients are the foundation of management: they address the defect, not just the symptom.",
    choices: [
      { text: "A defective epidermal barrier with immune dysregulation", isCorrect: true },
      { text: "Excessive melanin production", isCorrect: false },
      { text: "Bacterial infection as the primary event", isCorrect: false },
      { text: "Accelerated keratinocyte turnover alone", isCorrect: false },
    ],
  },
  {
    stem: "Where does atopic eczema typically affect an older child or adult?",
    topic: "Eczema & Dermatitis",
    explanation:
      "The flexures — antecubital and popliteal fossae, wrists and neck. Infants characteristically show face and extensor involvement instead, with the distribution shifting as the child grows. Recognising the age-appropriate pattern is one of the more useful discriminators from other itchy eruptions.",
    choices: [
      { text: "Flexural surfaces such as elbow and knee creases", isCorrect: true },
      { text: "Extensor surfaces and scalp only", isCorrect: false },
      { text: "Palms and soles exclusively", isCorrect: false },
      { text: "The mucous membranes", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes irritant from allergic contact dermatitis?",
    topic: "Eczema & Dermatitis",
    explanation:
      "Irritant dermatitis is direct chemical damage, needs no prior exposure and can affect anyone given sufficient dose — it is the commoner of the two. Allergic contact dermatitis is a delayed type IV hypersensitivity requiring prior sensitisation, so it occurs in susceptible individuals and is confirmed by patch testing.",
    choices: [
      { text: "Irritant is direct damage affecting anyone; allergic is type IV hypersensitivity needing prior sensitisation", isCorrect: true },
      { text: "Irritant requires prior sensitisation; allergic does not", isCorrect: false },
      { text: "Both are immediate IgE-mediated reactions", isCorrect: false },
      { text: "They are indistinguishable and managed identically", isCorrect: false },
    ],
  },
  {
    stem: "In pigmented skin, what is often the patient's main concern after eczema settles?",
    topic: "Eczema & Dermatitis",
    explanation:
      "Post-inflammatory hyperpigmentation, or sometimes hypopigmentation, which can persist for months after the inflammation has resolved. Dismissing this as cosmetic damages the therapeutic relationship — for many patients it is more distressing than the original itch, and explaining that it fades slowly with pigment recovery is part of the consultation.",
    choices: [
      { text: "Post-inflammatory pigment change persisting long after the rash resolves", isCorrect: true },
      { text: "Permanent scarring in every case", isCorrect: false },
      { text: "Immediate recurrence within days, always", isCorrect: false },
      { text: "Loss of sweating in the affected area", isCorrect: false },
    ],
  },
  {
    stem: "A child with eczema develops rapidly worsening painful lesions with punched-out erosions and fever. What must be considered?",
    topic: "Eczema & Dermatitis",
    explanation:
      "Eczema herpeticum — disseminated herpes simplex infection of eczematous skin. It is a dermatological emergency requiring urgent antiviral treatment, and it is easily mistaken for a simple bacterial flare. Pain, monomorphic punched-out erosions and systemic upset are the features that should redirect thinking.",
    choices: [
      { text: "Eczema herpeticum, requiring urgent antiviral treatment", isCorrect: true },
      { text: "An ordinary eczema flare needing stronger emollient", isCorrect: false },
      { text: "Contact dermatitis from a new soap", isCorrect: false },
      { text: "Psoriasis developing in a child", isCorrect: false },
    ],
  },
  {
    stem: "Why is potency of a topical corticosteroid matched to both site and severity?",
    topic: "Eczema & Dermatitis",
    explanation:
      "Absorption varies greatly by site — thin facial, flexural and genital skin absorbs far more than palms — so a potency safe on the limbs can cause atrophy, striae and telangiectasia on the face. Under-treating is equally harmful, prolonging inflammation and, in pigmented skin, the pigment change that follows it.",
    choices: [
      { text: "Absorption varies by site, so the same potency risks atrophy on thin skin", isCorrect: true },
      { text: "All skin sites absorb steroid identically", isCorrect: false },
      { text: "Potency affects only the cost, not the outcome", isCorrect: false },
      { text: "Stronger steroids are always safer", isCorrect: false },
    ],
  },

  /* ---- Psoriasis & Papulosquamous ---- */
  {
    stem: "What is the underlying abnormality in psoriasis?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "Immune-mediated acceleration of keratinocyte turnover, driven substantially by the IL-23 and IL-17 axis, with associated dermal inflammation and vascular change. Transit that normally takes weeks compresses to days, so cells reach the surface immature — producing the characteristic thick silvery scale.",
    choices: [
      { text: "Immune-driven acceleration of keratinocyte turnover", isCorrect: true },
      { text: "A defective epidermal barrier from filaggrin loss", isCorrect: false },
      { text: "Chronic fungal infection of the epidermis", isCorrect: false },
      { text: "Autoantibodies against desmosomes", isCorrect: false },
    ],
  },
  {
    stem: "Where does chronic plaque psoriasis characteristically appear?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "Extensor surfaces — elbows, knees — plus scalp, sacrum and the nails. This extensor pattern is the mirror image of atopic eczema's flexural one, and comparing distribution is often more discriminating than examining an individual lesion.",
    choices: [
      { text: "Extensor surfaces, scalp, sacrum and nails", isCorrect: true },
      { text: "Flexural creases only", isCorrect: false },
      { text: "Exclusively the face", isCorrect: false },
      { text: "Mucous membranes primarily", isCorrect: false },
    ],
  },
  {
    stem: "What is the Koebner phenomenon?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "New lesions appearing at sites of skin trauma such as scratches, surgical scars or friction. It is seen in psoriasis, lichen planus and vitiligo, and it has practical consequences — advising patients to avoid unnecessary trauma to affected skin, and anticipating disease at surgical sites.",
    choices: [
      { text: "New lesions arising at sites of skin trauma", isCorrect: true },
      { text: "Bleeding points on removing scale", isCorrect: false },
      { text: "Central clearing of an annular lesion", isCorrect: false },
      { text: "Blistering on gentle lateral pressure", isCorrect: false },
    ],
  },
  {
    stem: "Which nail changes are associated with psoriasis?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "Pitting, onycholysis, subungual hyperkeratosis and oil-drop discolouration. Nail involvement is worth seeking because it correlates with psoriatic arthritis — so finding it should prompt asking about joint pain and stiffness rather than being noted as a cosmetic detail.",
    choices: [
      { text: "Pitting, onycholysis and subungual hyperkeratosis", isCorrect: true },
      { text: "Blue discolouration of the lunula", isCorrect: false },
      { text: "Complete absence of nails from birth", isCorrect: false },
      { text: "Transverse white bands only", isCorrect: false },
    ],
  },
  {
    stem: "A young adult develops multiple small scaly papules over the trunk two weeks after a sore throat. What is the likely diagnosis?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "Guttate psoriasis, classically following streptococcal pharyngitis. The eruption is widespread and small-droplet in character rather than forming large plaques, and it often resolves over weeks to months — though some patients later develop chronic plaque disease.",
    choices: [
      { text: "Guttate psoriasis following streptococcal infection", isCorrect: true },
      { text: "Chronic plaque psoriasis", isCorrect: false },
      { text: "Atopic eczema", isCorrect: false },
      { text: "Scabies", isCorrect: false },
    ],
  },
  {
    stem: "What are the characteristic features of lichen planus?",
    topic: "Psoriasis & Papulosquamous",
    explanation:
      "Purple, polygonal, pruritic, flat-topped papules, often with fine white lines called Wickham striae, and frequently with oral involvement. In pigmented skin the lesions appear markedly violaceous to dark brown, and post-inflammatory hyperpigmentation afterwards is prominent and slow to fade.",
    choices: [
      { text: "Purple polygonal pruritic flat-topped papules with Wickham striae", isCorrect: true },
      { text: "Thick silvery scale on extensor surfaces", isCorrect: false },
      { text: "Honey-coloured crusting around the nose", isCorrect: false },
      { text: "Annular lesions with central clearing and a raised edge", isCorrect: false },
    ],
  },

  /* ---- Acne & Follicular Disorders ---- */
  {
    stem: "Which four processes contribute to acne vulgaris?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "Increased sebum production, abnormal follicular keratinisation blocking the duct, colonisation by Cutibacterium acnes, and inflammation. Each treatment targets a different one of these — which is why combining agents with different mechanisms outperforms escalating the dose of a single one.",
    choices: [
      { text: "Excess sebum, follicular plugging, C. acnes colonisation and inflammation", isCorrect: true },
      { text: "Poor hygiene, diet, stress and genetics alone", isCorrect: false },
      { text: "Fungal overgrowth and barrier loss", isCorrect: false },
      { text: "Autoimmune attack on sebaceous glands", isCorrect: false },
    ],
  },
  {
    stem: "What is a comedone, and why does its presence matter diagnostically?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "A plugged pilosebaceous follicle — open as a blackhead, closed as a whitehead. Comedones are the defining lesion of acne, and their presence distinguishes it from conditions that produce papules and pustules without them, notably rosacea and folliculitis.",
    choices: [
      { text: "A plugged follicle; comedones distinguish acne from rosacea and folliculitis", isCorrect: true },
      { text: "A dilated blood vessel visible on the surface", isCorrect: false },
      { text: "A fluid-filled blister under the epidermis", isCorrect: false },
      { text: "A scarred hair follicle that cannot regrow", isCorrect: false },
    ],
  },
  {
    stem: "Why is early effective treatment of inflammatory acne important?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "Because scarring and, in pigmented skin, prolonged post-inflammatory hyperpigmentation are largely preventable but very difficult to reverse. Waiting to see whether it settles risks permanent change to a visible area during adolescence — the psychological impact of which is consistently underestimated.",
    choices: [
      { text: "Scarring and post-inflammatory pigmentation are preventable but hard to reverse", isCorrect: true },
      { text: "Untreated acne becomes infectious to others", isCorrect: false },
      { text: "It progresses to skin cancer if untreated", isCorrect: false },
      { text: "Treatment is only effective in the first week", isCorrect: false },
    ],
  },
  {
    stem: "Why is isotretinoin absolutely contraindicated in pregnancy?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "It is a potent teratogen causing severe craniofacial, cardiac and central nervous system malformations. This is why prescribing is governed by strict pregnancy prevention requirements — reliable contraception and documented negative pregnancy testing before, during and after treatment.",
    choices: [
      { text: "It is a potent teratogen causing severe congenital malformations", isCorrect: true },
      { text: "It causes maternal hypertension only", isCorrect: false },
      { text: "It is inactivated by pregnancy hormones", isCorrect: false },
      { text: "It has no effect and the restriction is precautionary", isCorrect: false },
    ],
  },
  {
    stem: "How does rosacea differ from acne in presentation?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "Rosacea affects central facial skin with flushing, persistent erythema, telangiectasia, papules and pustules — but no comedones. It typically presents in adults rather than adolescents, and in pigmented skin the background erythema is subtle, so it is frequently missed or misdiagnosed.",
    choices: [
      { text: "Central facial flushing, telangiectasia and papules but no comedones, in adults", isCorrect: true },
      { text: "It always includes prominent comedones", isCorrect: false },
      { text: "It affects only the trunk and back", isCorrect: false },
      { text: "It occurs exclusively in adolescents", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops painful recurrent nodules and sinus tracts in the axillae and groin. What is the likely diagnosis?",
    topic: "Acne & Follicular Disorders",
    explanation:
      "Hidradenitis suppurativa, a chronic inflammatory disease of the follicular unit in apocrine-bearing skin. Recurrent nodules, abscesses, sinus tracts and rope-like scarring are characteristic. It is commonly mistaken for repeated simple abscesses, and that mistake delays diagnosis by years.",
    choices: [
      { text: "Hidradenitis suppurativa", isCorrect: true },
      { text: "Recurrent simple staphylococcal abscesses", isCorrect: false },
      { text: "Inguinal hernia with skin change", isCorrect: false },
      { text: "Contact dermatitis from deodorant", isCorrect: false },
    ],
  },

  /* ---- Skin Infections & Infestations ---- */
  {
    stem: "What is the characteristic appearance of impetigo?",
    topic: "Skin Infections & Infestations",
    explanation:
      "Golden or honey-coloured crusting, usually around the nose and mouth, caused by Staphylococcus aureus or Streptococcus pyogenes. It is highly contagious in children, spreading by direct contact and fomites — so treatment is accompanied by advice on hygiene and school exclusion.",
    choices: [
      { text: "Honey-coloured crusting, typically perioral or perinasal", isCorrect: true },
      { text: "Thick silvery scale on the elbows", isCorrect: false },
      { text: "Deep painful nodules with sinus tracts", isCorrect: false },
      { text: "Widespread flaccid blisters over the trunk", isCorrect: false },
    ],
  },
  {
    stem: "How does tinea corporis typically appear?",
    topic: "Skin Infections & Infestations",
    explanation:
      "Annular lesions with a raised scaly advancing edge and relative central clearing — the reason for the name ringworm, despite no worm being involved. Scrapings for microscopy and culture confirm it, and this matters because topical steroid alone alters the appearance and worsens the infection.",
    choices: [
      { text: "Annular lesions with a raised scaly edge and central clearing", isCorrect: true },
      { text: "Honey-coloured crusts on the face", isCorrect: false },
      { text: "Purple flat-topped papules with white lines", isCorrect: false },
      { text: "Burrows between the finger webs", isCorrect: false },
    ],
  },
  {
    stem: "What is tinea incognito, and how does it arise?",
    topic: "Skin Infections & Infestations",
    explanation:
      "A fungal infection whose appearance has been altered by topical corticosteroid — the inflammation and scaly edge are suppressed, so it loses its ring shape and looks less alarming while spreading further. It is a direct consequence of treating an undiagnosed rash with steroid, and it is common.",
    choices: [
      { text: "Fungal infection modified by topical steroid, losing its typical appearance while spreading", isCorrect: true },
      { text: "Fungal infection that only affects the nails", isCorrect: false },
      { text: "A bacterial infection resembling fungus", isCorrect: false },
      { text: "An allergic reaction to antifungal cream", isCorrect: false },
    ],
  },
  {
    stem: "What causes the intense itch of scabies, and why is it worse at night?",
    topic: "Skin Infections & Infestations",
    explanation:
      "A delayed hypersensitivity reaction to the mite, its eggs and faeces — which is why itch begins weeks after a first infestation but within days on re-exposure, and why it persists for some time after successful treatment. Nocturnal worsening relates to skin warmth and mite activity.",
    choices: [
      { text: "Delayed hypersensitivity to the mite and its products", isCorrect: true },
      { text: "Direct mechanical damage from burrowing alone", isCorrect: false },
      { text: "Bacterial superinfection in every case", isCorrect: false },
      { text: "Toxin secreted by the adult mite", isCorrect: false },
    ],
  },
  {
    stem: "Why must household and close contacts be treated simultaneously in scabies?",
    topic: "Skin Infections & Infestations",
    explanation:
      "Because contacts may be infested but not yet itching, given the weeks-long delay before symptoms appear. Treating only the symptomatic person guarantees reinfestation from an asymptomatic carrier — which is the usual explanation for apparent treatment failure.",
    choices: [
      { text: "Contacts can be infested before becoming symptomatic and will reinfest the patient", isCorrect: true },
      { text: "The medication only works when several people use it", isCorrect: false },
      { text: "It is a legal requirement rather than a clinical one", isCorrect: false },
      { text: "Contacts are never at risk of infestation", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a painful vesicular eruption in a band that stops abruptly at the midline. What is the diagnosis?",
    topic: "Skin Infections & Infestations",
    explanation:
      "Herpes zoster — reactivation of varicella-zoster virus in a single dermatome, which is why it respects the midline. Involvement of the ophthalmic division threatens the eye and needs urgent assessment, and antiviral treatment is most effective started early.",
    choices: [
      { text: "Herpes zoster (shingles) in a dermatomal distribution", isCorrect: true },
      { text: "Impetigo spreading along a scratch", isCorrect: false },
      { text: "Contact dermatitis from clothing", isCorrect: false },
      { text: "Bullous pemphigoid", isCorrect: false },
    ],
  },
];

/* ═══════════════ PRACTICE SET 2 ═══════════════ */

const SET2: Q[] = [
  /* ---- Skin Cancer & Lesions ---- */
  {
    stem: "Which skin cancer is most common, and how does it typically behave?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Basal cell carcinoma — slow-growing, locally invasive, and almost never metastasising. It typically appears as a pearly nodule with rolled edges and surface telangiectasia, sometimes ulcerating centrally. Because it destroys local tissue rather than spreading, early treatment protects function and appearance.",
    choices: [
      { text: "Basal cell carcinoma — locally invasive but rarely metastasising", isCorrect: true },
      { text: "Melanoma — the most common and most aggressive", isCorrect: false },
      { text: "Squamous cell carcinoma — never locally invasive", isCorrect: false },
      { text: "Kaposi sarcoma — the commonest worldwide", isCorrect: false },
    ],
  },
  {
    stem: "Which melanoma subtypes are most common in people with richly pigmented skin?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Acral lentiginous melanoma on palms, soles and nail beds, and mucosal melanoma — sites that are not sun-exposed. Melanoma is less common overall in darker skin but is diagnosed later and carries worse outcomes, largely because these sites are not examined. Examining soles and nails is therefore not optional.",
    choices: [
      { text: "Acral lentiginous and mucosal melanoma, at non-sun-exposed sites", isCorrect: true },
      { text: "Superficial spreading melanoma on the back only", isCorrect: false },
      { text: "Melanoma does not occur in pigmented skin", isCorrect: false },
      { text: "Lentigo maligna on the face predominantly", isCorrect: false },
    ],
  },
  {
    stem: "What does the ABCDE rule assess?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Asymmetry, Border irregularity, Colour variation, Diameter over 6 mm and Evolution — features suggesting melanoma. Evolution matters most: a lesion that is changing warrants assessment even if it meets no other criterion, and a patient reporting change should be taken seriously.",
    choices: [
      { text: "Features suggesting melanoma in a pigmented lesion", isCorrect: true },
      { text: "Severity scoring for eczema", isCorrect: false },
      { text: "Depth of a burn injury", isCorrect: false },
      { text: "Response of psoriasis to treatment", isCorrect: false },
    ],
  },
  {
    stem: "What is a longitudinal pigmented band in a single nail with spread onto the surrounding skin?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Pigment extending onto the proximal nail fold — Hutchinson's sign — raises strong concern for subungual melanoma and warrants urgent referral. Benign longitudinal melanonychia is common in pigmented skin and usually affects several nails; a single changing band with periungual spread is the worrying pattern.",
    choices: [
      { text: "Hutchinson's sign, concerning for subungual melanoma", isCorrect: true },
      { text: "A normal finding requiring no action", isCorrect: false },
      { text: "Definitive evidence of fungal nail infection", isCorrect: false },
      { text: "A sign of iron deficiency", isCorrect: false },
    ],
  },
  {
    stem: "Which premalignant lesion may progress to squamous cell carcinoma?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Actinic (solar) keratosis — rough scaly patches on chronically sun-exposed skin. Only a small proportion transform, but they mark cumulative ultraviolet damage and identify a patient who needs surveillance and sun protection rather than treatment of that lesion alone.",
    choices: [
      { text: "Actinic keratosis", isCorrect: true },
      { text: "Seborrhoeic keratosis", isCorrect: false },
      { text: "Dermatofibroma", isCorrect: false },
      { text: "Skin tag", isCorrect: false },
    ],
  },
  {
    stem: "What is a keloid, and why does it matter particularly in pigmented skin?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "An overgrowth of scar tissue extending beyond the original wound margins, in contrast to a hypertrophic scar which stays within them. Keloids are considerably more common in richly pigmented skin, so elective procedures, piercings and incision planning should account for that risk in advance.",
    choices: [
      { text: "Scar overgrowth beyond the original wound edges, commoner in pigmented skin", isCorrect: true },
      { text: "A scar that remains within the wound boundary", isCorrect: false },
      { text: "A benign pigmented mole", isCorrect: false },
      { text: "A premalignant sun-induced lesion", isCorrect: false },
    ],
  },
  {
    stem: "Which cutaneous malignancy is strongly associated with advanced HIV infection?",
    topic: "Skin Cancer & Lesions",
    explanation:
      "Kaposi sarcoma, driven by human herpesvirus 8, presenting as violaceous or dark papules, plaques and nodules that may involve mucosa and viscera. In endemic regions it may be the presenting feature of undiagnosed HIV, so its recognition should prompt testing.",
    choices: [
      { text: "Kaposi sarcoma", isCorrect: true },
      { text: "Basal cell carcinoma", isCorrect: false },
      { text: "Actinic keratosis", isCorrect: false },
      { text: "Seborrhoeic keratosis", isCorrect: false },
    ],
  },

  /* ---- Pigmentary Disorders ---- */
  {
    stem: "What causes vitiligo?",
    topic: "Pigmentary Disorders",
    explanation:
      "Autoimmune destruction of melanocytes, producing sharply demarcated depigmented — not merely lighter — patches. It is associated with other autoimmune conditions, particularly thyroid disease, which is worth screening for. The psychosocial impact is substantial and is greater where the contrast with surrounding skin is greater.",
    choices: [
      { text: "Autoimmune destruction of melanocytes", isCorrect: true },
      { text: "Fungal infection of the stratum corneum", isCorrect: false },
      { text: "Excess melanin deposition in the dermis", isCorrect: false },
      { text: "Vitamin deficiency affecting keratinocytes", isCorrect: false },
    ],
  },
  {
    stem: "How does pityriasis versicolor differ from vitiligo?",
    topic: "Pigmentary Disorders",
    explanation:
      "Versicolor is a Malassezia yeast overgrowth producing fine scaly patches that are hypopigmented rather than fully depigmented, most often on the trunk, and it becomes obvious after sun exposure. Vitiligo patches are completely depigmented, sharply bordered and not scaly, and antifungals do nothing for it.",
    choices: [
      { text: "Versicolor is a scaly, hypopigmented fungal overgrowth; vitiligo is non-scaly and fully depigmented", isCorrect: true },
      { text: "Both are autoimmune and treated identically", isCorrect: false },
      { text: "Versicolor causes complete loss of melanocytes", isCorrect: false },
      { text: "Vitiligo is caused by yeast and responds to antifungals", isCorrect: false },
    ],
  },
  {
    stem: "What is melasma, and what commonly precipitates it?",
    topic: "Pigmentary Disorders",
    explanation:
      "Symmetrical brown facial hyperpigmentation, most often on cheeks, forehead and upper lip, precipitated by ultraviolet exposure, pregnancy and hormonal contraception. It is far more common in pigmented skin, and rigorous daily photoprotection is the single most effective measure — treatment without it disappoints.",
    choices: [
      { text: "Symmetrical facial hyperpigmentation triggered by UV and hormonal factors", isCorrect: true },
      { text: "Complete depigmentation of the face", isCorrect: false },
      { text: "A fungal infection of facial skin", isCorrect: false },
      { text: "A premalignant lesion requiring excision", isCorrect: false },
    ],
  },
  {
    stem: "Why should potent skin-lightening products be discouraged?",
    topic: "Pigmentary Disorders",
    explanation:
      "Unregulated products frequently contain potent corticosteroids, hydroquinone at unsafe concentrations or mercury, causing steroid-induced atrophy, striae, exogenous ochronosis, adrenal suppression and systemic toxicity. The paradox is that many produce worse and often irreversible pigmentation than the problem they were used for.",
    choices: [
      { text: "They often contain potent steroids, unsafe hydroquinone or mercury, causing lasting harm", isCorrect: true },
      { text: "They are simply ineffective but otherwise harmless", isCorrect: false },
      { text: "They work too quickly to be comfortable", isCorrect: false },
      { text: "They are only a problem in children", isCorrect: false },
    ],
  },
  {
    stem: "What causes post-inflammatory hyperpigmentation?",
    topic: "Pigmentary Disorders",
    explanation:
      "Inflammation stimulates melanocytes and, where the basal layer is disrupted, pigment drops into the dermis where it is cleared very slowly. Epidermal pigment fades over months; dermal pigment can take far longer. Controlling the underlying inflammation promptly is what limits it — treating the pigment alone achieves little while inflammation continues.",
    choices: [
      { text: "Inflammation stimulates melanocytes and pigment drops into the dermis, clearing slowly", isCorrect: true },
      { text: "Melanocytes are permanently destroyed", isCorrect: false },
      { text: "Iron from small haemorrhages, in every case", isCorrect: false },
      { text: "It is unrelated to the preceding inflammation", isCorrect: false },
    ],
  },

  /* ---- Blistering & Autoimmune ---- */
  {
    stem: "What distinguishes pemphigus vulgaris from bullous pemphigoid clinically?",
    topic: "Blistering & Autoimmune",
    explanation:
      "Pemphigus produces flaccid, easily ruptured blisters with frequent painful mucosal involvement, because the split is intraepidermal. Pemphigoid produces tense blisters on an urticarial base, typically sparing mucosa, because the split is subepidermal and the roof is thicker.",
    choices: [
      { text: "Pemphigus: flaccid blisters with mucosal involvement; pemphigoid: tense blisters, usually sparing mucosa", isCorrect: true },
      { text: "Pemphigus produces tense blisters and spares mucosa", isCorrect: false },
      { text: "Both are identical in presentation and treatment", isCorrect: false },
      { text: "Neither involves autoantibodies", isCorrect: false },
    ],
  },
  {
    stem: "Against what are the autoantibodies in pemphigus vulgaris directed?",
    topic: "Blistering & Autoimmune",
    explanation:
      "Desmogleins — desmosomal proteins holding keratinocytes together. Losing that adhesion causes acantholysis and intraepidermal separation, which is why the blisters are flaccid and why gentle lateral pressure extends them, the basis of a positive Nikolsky sign.",
    choices: [
      { text: "Desmogleins in desmosomes, causing keratinocytes to separate", isCorrect: true },
      { text: "Hemidesmosomal proteins at the basement membrane", isCorrect: false },
      { text: "Collagen within the dermis", isCorrect: false },
      { text: "Melanocyte surface antigens", isCorrect: false },
    ],
  },
  {
    stem: "What is a positive Nikolsky sign, and what does it suggest?",
    topic: "Blistering & Autoimmune",
    explanation:
      "Gentle lateral pressure on apparently normal skin causes the epidermis to shear away. It indicates loss of epidermal cohesion, seen in pemphigus, staphylococcal scalded skin syndrome and toxic epidermal necrolysis — all conditions where the epidermis is failing rather than merely inflamed.",
    choices: [
      { text: "Epidermis shears off under gentle lateral pressure, indicating loss of cohesion", isCorrect: true },
      { text: "A blister fails to spread when pressed", isCorrect: false },
      { text: "Scale removal produces pinpoint bleeding", isCorrect: false },
      { text: "New lesions appear at sites of trauma", isCorrect: false },
    ],
  },
  {
    stem: "Which condition is dermatitis herpetiformis associated with?",
    topic: "Blistering & Autoimmune",
    explanation:
      "Coeliac disease. It presents as intensely itchy grouped vesicles on extensor surfaces — elbows, knees, buttocks — with granular IgA deposits in dermal papillae. It responds to a gluten-free diet, so recognising the skin sign leads to diagnosing the enteropathy.",
    choices: [
      { text: "Coeliac disease", isCorrect: true },
      { text: "Inflammatory bowel disease", isCorrect: false },
      { text: "Chronic kidney disease", isCorrect: false },
      { text: "Herpes simplex infection", isCorrect: false },
    ],
  },
  {
    stem: "What cutaneous features suggest systemic lupus erythematosus?",
    topic: "Blistering & Autoimmune",
    explanation:
      "A photosensitive malar rash sparing the nasolabial folds, discoid plaques that scar and cause pigment change, and oral ulceration. In pigmented skin the malar erythema may be difficult to appreciate, while discoid lesions leave prominent central hypopigmentation with a hyperpigmented rim.",
    choices: [
      { text: "Photosensitive malar rash sparing nasolabial folds, discoid scarring plaques and oral ulcers", isCorrect: true },
      { text: "Honey-coloured crusting around the mouth", isCorrect: false },
      { text: "Annular scaly lesions with central clearing", isCorrect: false },
      { text: "Comedones over the central face", isCorrect: false },
    ],
  },
  {
    stem: "What does a butterfly-shaped facial rash following sun exposure warrant?",
    topic: "Blistering & Autoimmune",
    explanation:
      "Assessment for systemic lupus, including examination for joint, renal and haematological involvement and appropriate serology. The skin finding is a prompt for systemic assessment — treating it as an isolated dermatological problem risks missing renal disease that is silent until advanced.",
    choices: [
      { text: "Assessment for systemic involvement, including renal disease, with serology", isCorrect: true },
      { text: "Topical antifungal treatment only", isCorrect: false },
      { text: "Reassurance with no further action", isCorrect: false },
      { text: "Urgent excision biopsy of the whole area", isCorrect: false },
    ],
  },

  /* ---- Drug Eruptions & Emergencies ---- */
  {
    stem: "What distinguishes Stevens-Johnson syndrome from toxic epidermal necrolysis?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "The extent of epidermal detachment — under 10 percent of body surface in SJS, over 30 percent in TEN, with an overlap band between. Both are severe mucocutaneous reactions, usually drug-induced, requiring immediate withdrawal of the culprit and management in a burns or high-dependency setting.",
    choices: [
      { text: "The percentage of body surface with epidermal detachment", isCorrect: true },
      { text: "Whether mucous membranes are involved at all", isCorrect: false },
      { text: "SJS is drug-induced and TEN is infectious", isCorrect: false },
      { text: "There is no difference; the terms are interchangeable", isCorrect: false },
    ],
  },
  {
    stem: "Which features of a drug eruption suggest a severe rather than benign reaction?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "Mucosal involvement, skin pain or tenderness, blistering, facial oedema, fever and lymphadenopathy, and deranged liver or renal function. A simple morbilliform eruption in a well patient is common and benign; these features mark the minority that can kill and demand immediate drug withdrawal.",
    choices: [
      { text: "Mucosal involvement, skin pain, blistering, facial oedema, fever and organ derangement", isCorrect: true },
      { text: "Itch alone", isCorrect: false },
      { text: "A rash confined to the trunk in a well patient", isCorrect: false },
      { text: "Onset more than a month after the drug was stopped", isCorrect: false },
    ],
  },
  {
    stem: "What characterises DRESS syndrome?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "Drug reaction with eosinophilia and systemic symptoms — a widespread eruption with fever, facial oedema, lymphadenopathy, eosinophilia and internal organ involvement, especially hepatitis. Its long latency of two to eight weeks after starting the drug means the culprit is often overlooked.",
    choices: [
      { text: "Rash with fever, facial oedema, eosinophilia and organ involvement, weeks after starting a drug", isCorrect: true },
      { text: "An immediate reaction within minutes of a dose", isCorrect: false },
      { text: "A localised rash at the injection site only", isCorrect: false },
      { text: "Blistering confined to sun-exposed skin", isCorrect: false },
    ],
  },
  {
    stem: "What is a fixed drug eruption?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "A well-demarcated round lesion recurring at exactly the same site each time the drug is taken, often leaving marked residual hyperpigmentation — particularly conspicuous in pigmented skin. The reproducible site is the diagnostic clue and makes identifying the culprit unusually straightforward.",
    choices: [
      { text: "A lesion recurring at the identical site on each exposure, leaving pigmentation", isCorrect: true },
      { text: "A rash that migrates to a new site each day", isCorrect: false },
      { text: "Generalised blistering of the whole body", isCorrect: false },
      { text: "A permanent scar from the first exposure", isCorrect: false },
    ],
  },
  {
    stem: "How does urticaria differ from other rashes, and what distinguishes it from anaphylaxis?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "Urticarial weals are transient, each lasting under 24 hours before resolving without marks, and intensely itchy. Anaphylaxis adds airway, breathing or circulatory compromise — and it is that systemic involvement, not the extent of the rash, that determines the need for adrenaline.",
    choices: [
      { text: "Weals last under 24 hours and resolve without marks; anaphylaxis adds airway or circulatory compromise", isCorrect: true },
      { text: "Urticarial lesions are permanent and scarring", isCorrect: false },
      { text: "Extensive urticaria always means anaphylaxis", isCorrect: false },
      { text: "Urticaria is never drug-related", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops widespread painful erythema with skin peeling and mucosal ulceration after starting a new drug. What is the immediate priority?",
    topic: "Drug Eruptions & Emergencies",
    explanation:
      "Stop the suspected drug immediately and arrange urgent specialist care — this presentation suggests SJS or TEN, where mortality relates directly to delay in withdrawal. Supportive management of fluids, temperature, analgesia and infection risk follows, as for a major burn.",
    choices: [
      { text: "Stop the drug at once and arrange urgent specialist care", isCorrect: true },
      { text: "Continue the drug and add an antihistamine", isCorrect: false },
      { text: "Apply a potent topical steroid and review in a week", isCorrect: false },
      { text: "Reassure and discharge with emollients", isCorrect: false },
    ],
  },

  /* ---- Hair, Nails & Systemic Signs ---- */
  {
    stem: "What is traction alopecia, and why does early recognition matter?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "Hair loss from sustained tension — tight braiding, weaves, extensions — typically at the frontal and temporal hairline. It is reversible early but becomes scarring and permanent if the tension continues, so identifying it and discussing styling before follicles are lost is the entire intervention.",
    choices: [
      { text: "Tension-induced hair loss at the hairline, reversible early but permanently scarring if it continues", isCorrect: true },
      { text: "Autoimmune hair loss in discrete round patches", isCorrect: false },
      { text: "Diffuse shedding after a systemic illness", isCorrect: false },
      { text: "A fungal infection of the scalp", isCorrect: false },
    ],
  },
  {
    stem: "How does alopecia areata typically present?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "Sharply demarcated round or oval patches of complete hair loss with normal underlying skin, sometimes with exclamation-mark hairs at the margin. It is autoimmune and non-scarring, so regrowth is possible — an important distinction from scarring alopecias, where follicles are destroyed.",
    choices: [
      { text: "Sharply defined round patches of loss with normal skin, non-scarring", isCorrect: true },
      { text: "Diffuse thinning across the entire scalp", isCorrect: false },
      { text: "Scaly patches with broken hairs and scarring", isCorrect: false },
      { text: "Loss confined to the frontal hairline from tension", isCorrect: false },
    ],
  },
  {
    stem: "What is telogen effluvium?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "Diffuse shedding two to three months after a physiological stressor — severe illness, childbirth, major surgery, marked weight loss — as many follicles shift synchronously into the resting phase. It is self-limiting, and the delay between trigger and shedding is what makes the connection easy to miss.",
    choices: [
      { text: "Diffuse shedding two to three months after a physiological stressor, self-limiting", isCorrect: true },
      { text: "Permanent scarring hair loss from inflammation", isCorrect: false },
      { text: "Patchy autoimmune hair loss", isCorrect: false },
      { text: "Hair loss caused solely by fungal infection", isCorrect: false },
    ],
  },
  {
    stem: "Why does tinea capitis require oral rather than topical antifungal treatment?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "The infection involves the hair shaft and follicle, which topical agents cannot penetrate adequately. Untreated or under-treated it can progress to a kerion with permanent scarring alopecia — so recognising that this is a systemic-treatment condition protects the child's hair long-term.",
    choices: [
      { text: "The infection is within the hair shaft and follicle, beyond topical penetration", isCorrect: true },
      { text: "Topical antifungals are unavailable", isCorrect: false },
      { text: "Oral treatment is simply cheaper", isCorrect: false },
      { text: "The condition resolves without any treatment", isCorrect: false },
    ],
  },
  {
    stem: "What does koilonychia suggest?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "Spoon-shaped concave nails, classically associated with chronic iron deficiency. Like clubbing, leuconychia and splinter haemorrhages, it is a nail sign pointing beyond the skin — which is why the nails are examined as part of a general examination rather than only a dermatological one.",
    choices: [
      { text: "Chronic iron deficiency", isCorrect: true },
      { text: "Acute bacterial infection", isCorrect: false },
      { text: "Excess vitamin D", isCorrect: false },
      { text: "Recent trauma to the nail bed only", isCorrect: false },
    ],
  },
  {
    stem: "Which skin finding may be the first sign of undiagnosed diabetes?",
    topic: "Hair, Nails & Systemic Signs",
    explanation:
      "Acanthosis nigricans — velvety hyperpigmented thickening of the axillae, neck and other flexures, reflecting insulin resistance. Recurrent candidiasis, boils and poorly healing wounds point the same way. Recognising it converts a cosmetic complaint into a metabolic diagnosis.",
    choices: [
      { text: "Acanthosis nigricans in the flexures", isCorrect: true },
      { text: "Vitiligo of the hands", isCorrect: false },
      { text: "A single seborrhoeic keratosis", isCorrect: false },
      { text: "Actinic keratosis on the scalp", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

/** Fisher-Yates. The correct answer is written first above; without this it would insert at position 1 every time. */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retries a write when the pooled connection drops. Real errors re-throw at once. */
async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      const transient =
        e instanceof Error &&
        (e.message.includes("P1001") ||
          e.message.includes("Can't reach database") ||
          e.message.includes("Connection") ||
          e.message.includes("ECONNRESET"));
      if (!transient || i === attempts) throw e;
      const wait = i * 2000;
      console.log(`    … connection hiccup on ${label}, retrying in ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

/**
 * Finds or creates Clinical Specialties → Dermatology.
 * Reuses an existing section rather than creating a duplicate, so this seed is
 * safe to run more than once.
 */
async function ensureCategory(): Promise<string | null> {
  const existing = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "cs-dermatology" } }),
    "find dermatology"
  );
  if (existing) {
    console.log("  · Section already exists: Clinical Specialties → Dermatology");
    return existing.id;
  }

  const parent = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "clinical-specialties" } }),
    "find parent"
  );
  if (!parent) {
    console.log('  ✗ Parent "clinical-specialties" not found — run seed-medical-taxonomy.ts first.');
    return null;
  }

  const created = await withRetry(
    () =>
      prisma.quizCategory.create({
        data: {
          slug: "cs-dermatology",
          title: "Dermatology",
          description:
            "Skin structure, eczema and psoriasis, acne, infections and infestations, skin cancer, pigmentary disorders and the cutaneous signs of systemic disease.",
          overview:
            "Dermatology rewards precise description more than almost any other specialty: name the lesion, its distribution and its evolution, and the differential narrows sharply. These sections also give sustained attention to how conditions appear in richly pigmented skin, where erythema is masked, pigment change is often the patient's main concern, and the melanomas that matter most arise on palms, soles and nails.",
          icon: "Layers",
          parentId: parent.id,
          order: 9,
          published: true,
        },
      }),
    "create dermatology"
  );
  console.log("  + Created section: Clinical Specialties → Dermatology");
  return created.id;
}

async function seedSet(o: {
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug,
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
          passThreshold: 70,
          difficulty: o.difficulty,
          published: true,
        },
        update: {
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );

  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    const opts = shuffled(q.choices);
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id,
            type: "SINGLE",
            stem: q.stem,
            topic: q.topic,
            explanation: q.explanation,
            points: 1,
            order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Dermatology…\n");
  const categoryId = await ensureCategory();
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "dermatology-practice-set-1",
    title: "Dermatology — Practice Set 1",
    description:
      "Thirty questions on skin structure and terminology, eczema and contact dermatitis, psoriasis and lichen planus, acne and rosacea, and the common skin infections and infestations. Includes how these present in richly pigmented skin. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categoryId,
    slug: "dermatology-practice-set-2",
    title: "Dermatology — Practice Set 2",
    description:
      "Thirty fresh questions — no overlap with Set 1 — on skin cancer and pigmented lesions, pigmentary disorders, the autoimmune blistering diseases, severe drug eruptions and dermatological emergencies, and hair, nail and systemic signs. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET2,
  });

  await seedSet({
    categoryId,
    slug: "dermatology-exam-1",
    title: "Dermatology — Timed Exam 1",
    description:
      "Thirty questions in 40 minutes on structure, eczema, psoriasis, acne and skin infection. Feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 40 * 60,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categoryId,
    slug: "dermatology-exam-2",
    title: "Dermatology — Timed Exam 2 (Comprehensive)",
    description:
      "All sixty questions in 75 minutes, covering the whole specialty including the dermatological emergencies. Sit this once both practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 75 * 60,
    difficulty: "Advanced",
    questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
