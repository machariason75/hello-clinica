import {
  GraduationCap,
  CalendarClock,
  PenLine,
  MessagesSquare,
  Stethoscope,
  HeartHandshake,
  Eye,
  BookOpenCheck,
  Compass,
  Dna,
  Activity,
  Pill,
  Calculator,
  ListChecks,
  FlaskConical,
  BookA,
  ClipboardList,
  Thermometer,
  HeartPulse,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { ResourceCategory } from "@prisma/client";

/**
 * The nine fixed resource categories (taxonomy, per Content Structure +
 * System Architecture). Category definitions are static config; the resource
 * ITEMS within each are admin-managed and read from the `resources` table —
 * so this respects "no hardcoded resources" while giving each category a real
 * page with intro copy and FAQs.
 */
export type ResourceCategoryDef = {
  slug: string;
  enum: ResourceCategory;
  title: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  faqs: { question: string; answer: string }[];
  group?: "nursing";
};

export const resourceCategories: ResourceCategoryDef[] = [
  {
    slug: "admissions",
    enum: "MEDICAL_SCHOOL_ADMISSIONS",
    title: "Medical School Admissions",
    description: "Guide students through admissions preparation, from prerequisites to submission.",
    overview:
      "Everything you need to understand and prepare for the medical school admissions process — what schools look for, how to build a competitive profile, and how to stay on track from start to submission.",
    icon: GraduationCap,
    faqs: [
      { question: "When should I start preparing my application?", answer: "Ideally 12–18 months before you intend to enroll. Early preparation gives you time to strengthen weaker areas, gather experiences, and request recommendation letters without pressure." },
      { question: "What do admissions committees look for?", answer: "A combination of academic readiness, meaningful clinical and service experience, strong writing, and clear motivation for medicine. Balance matters more than any single metric." },
      { question: "Do I need research experience?", answer: "It helps for research-focused programs but is not required everywhere. Depth and reflection on your experiences matter more than checking every box." },
    ],
  },
  {
    slug: "personal-statement-guide",
    enum: "PERSONAL_STATEMENT_GUIDE",
    title: "Personal Statement Guide",
    description: "Support essay development from first draft to final polish.",
    overview:
      "Practical guidance, templates, and examples to help you write a personal statement that is authentic, specific, and memorable — and avoid the most common mistakes.",
    icon: PenLine,
    faqs: [
      { question: "What should my personal statement be about?", answer: "Your motivation for medicine, told through specific experiences that shaped it. Show, don't tell — concrete moments are far more persuasive than general claims." },
      { question: "How long should it be?", answer: "Follow the character limit of your application service. Use the space to go deep on a few meaningful experiences rather than listing everything." },
      { question: "How many drafts is normal?", answer: "Several. Strong statements are revised over weeks, ideally with feedback from people who know you and the process." },
    ],
  },
  {
    slug: "interview-guide",
    enum: "INTERVIEW_GUIDE",
    title: "Interview Guide",
    description: "Prepare for every interview format with confidence.",
    overview:
      "Question banks, mock-interview strategies, and preparation frameworks for traditional, panel, and multiple mini-interview (MMI) formats.",
    icon: MessagesSquare,
    faqs: [
      { question: "What interview formats should I prepare for?", answer: "Traditional one-on-one, panel, and MMI are the most common. Each rewards a slightly different style of preparation, but all reward clear, reflective communication." },
      { question: "How do I prepare for an MMI?", answer: "Practice thinking out loud through short ethical and situational prompts. Structure your reasoning and acknowledge multiple perspectives." },
      { question: "What should I ask my interviewers?", answer: "Thoughtful questions about the school's mission, support systems, and community show genuine interest and help you evaluate fit." },
    ],
  },
  {
    slug: "study-resources",
    enum: "STUDY_RESOURCES",
    title: "Study Resources",
    description: "Strengthen academic performance and study habits.",
    overview:
      "Evidence-based study techniques, time-management frameworks, and recommended tools to help you perform well in coursework and standardized exams.",
    icon: BookOpenCheck,
    faqs: [
      { question: "What study techniques actually work?", answer: "Active recall and spaced repetition are consistently among the most effective. Passive re-reading is far less efficient." },
      { question: "How do I manage my time as a premed?", answer: "Plan in weekly blocks, protect time for rest, and prioritize consistency over occasional long sessions." },
      { question: "Which tools do you recommend?", answer: "Spaced-repetition apps, a reliable calendar, and a distraction-free study environment cover most needs." },
    ],
  },
  {
    slug: "career-exploration",
    enum: "CAREER_EXPLORATION",
    title: "Career Exploration",
    description: "Discover healthcare careers across disciplines.",
    overview:
      "Explore paths across medicine, physician assistant, nursing, and dental careers so you can make an informed, confident decision about your future.",
    icon: Compass,
    faqs: [
      { question: "How do I know which healthcare career fits me?", answer: "Explore through shadowing, conversations with professionals, and honest reflection on the lifestyle, training length, and work you find meaningful." },
      { question: "What's the difference between the main paths?", answer: "Each differs in training length, scope of practice, and day-to-day work. Exploring several helps you choose with clarity rather than assumption." },
      { question: "Can I change paths later?", answer: "Many people do. Early exploration reduces costly detours, but skills and prerequisites often transfer across paths." },
    ],
  },
  {
    slug: "nursing-resources",
    enum: "NURSING_RESOURCES",
    title: "Nursing Resources",
    description: "Core study aids and quick-reference guides for nursing students.",
    overview:
      "Practical, high-yield resources for nursing students — from anatomy and pharmacology review to dosage calculations, lab values, and NCLEX quick sheets. Use them to reinforce coursework and build confidence for clinicals and exams.",
    icon: Stethoscope,
    faqs: [
      { question: "How should I use these nursing resources?", answer: "Pair them with your coursework — review the relevant guide before lectures or clinicals, then use the quick sheets for fast recall while practicing questions." },
      { question: "Are these enough to pass the NCLEX?", answer: "They're a strong supplement for building fundamentals, but combine them with a dedicated review book and consistent practice questions for full NCLEX preparation." },
      { question: "Which should I start with?", answer: "Most students start with anatomy, physiology, and pharmacology basics, then layer in dosage calculations, lab values, and assessment guides as they move toward clinicals." },
    ],
  },
  {
    slug: "nursing-anatomy",
    enum: "NURSING_ANATOMY",
    title: "Anatomy Review",
    description: "Skeletal, muscular, and organ-system overviews.",
    overview: "Skeletal, muscular, and organ-system overviews. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Dna,
    group: "nursing",
    faqs: [
      { question: "What is in the Anatomy Review folder?", answer: "Quick-reference guides and downloadable sheets covering anatomy review. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-physiology",
    enum: "NURSING_PHYSIOLOGY",
    title: "Physiology Review",
    description: "How body systems function — cardiac, respiratory, renal and more.",
    overview: "How body systems function — cardiac, respiratory, renal and more. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Activity,
    group: "nursing",
    faqs: [
      { question: "What is in the Physiology Review folder?", answer: "Quick-reference guides and downloadable sheets covering physiology review. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-pharmacology",
    enum: "NURSING_PHARMACOLOGY",
    title: "Pharmacology Basics",
    description: "Drug classes, mechanisms, and high-yield medication facts.",
    overview: "Drug classes, mechanisms, and high-yield medication facts. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Pill,
    group: "nursing",
    faqs: [
      { question: "What is in the Pharmacology Basics folder?", answer: "Quick-reference guides and downloadable sheets covering pharmacology basics. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-dosage-calculations",
    enum: "NURSING_DOSAGE",
    title: "Dosage Calculations",
    description: "Practice and formulas for safe, accurate dosing.",
    overview: "Practice and formulas for safe, accurate dosing. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Calculator,
    group: "nursing",
    faqs: [
      { question: "What is in the Dosage Calculations folder?", answer: "Quick-reference guides and downloadable sheets covering dosage calculations. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-nclex-quick-sheets",
    enum: "NURSING_NCLEX_SHEETS",
    title: "NCLEX Quick Sheets",
    description: "Condensed, high-yield sheets for fast NCLEX review.",
    overview: "Condensed, high-yield sheets for fast NCLEX review. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: ListChecks,
    group: "nursing",
    faqs: [
      { question: "What is in the NCLEX Quick Sheets folder?", answer: "Quick-reference guides and downloadable sheets covering nclex quick sheets. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-lab-values",
    enum: "NURSING_LAB_VALUES",
    title: "Lab Values",
    description: "Normal ranges and interpretation references.",
    overview: "Normal ranges and interpretation references. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: FlaskConical,
    group: "nursing",
    faqs: [
      { question: "What is in the Lab Values folder?", answer: "Quick-reference guides and downloadable sheets covering lab values. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-medical-terminology",
    enum: "NURSING_MED_TERMINOLOGY",
    title: "Medical Terminology",
    description: "Prefixes, suffixes, and roots used across nursing.",
    overview: "Prefixes, suffixes, and roots used across nursing. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: BookA,
    group: "nursing",
    faqs: [
      { question: "What is in the Medical Terminology folder?", answer: "Quick-reference guides and downloadable sheets covering medical terminology. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-abbreviations",
    enum: "NURSING_ABBREVIATIONS",
    title: "Nursing Abbreviations",
    description: "Approved abbreviations and safe charting shorthand.",
    overview: "Approved abbreviations and safe charting shorthand. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: ClipboardList,
    group: "nursing",
    faqs: [
      { question: "What is in the Nursing Abbreviations folder?", answer: "Quick-reference guides and downloadable sheets covering nursing abbreviations. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-head-to-toe-assessment",
    enum: "NURSING_ASSESSMENT",
    title: "Head-to-Toe Assessment",
    description: "Checklists and normal-versus-abnormal findings.",
    overview: "Checklists and normal-versus-abnormal findings. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Stethoscope,
    group: "nursing",
    faqs: [
      { question: "What is in the Head-to-Toe Assessment folder?", answer: "Quick-reference guides and downloadable sheets covering head-to-toe assessment. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-vital-signs",
    enum: "NURSING_VITAL_SIGNS",
    title: "Vital Signs Guide",
    description: "Normal ranges and documentation across age groups.",
    overview: "Normal ranges and documentation across age groups. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Thermometer,
    group: "nursing",
    faqs: [
      { question: "What is in the Vital Signs Guide folder?", answer: "Quick-reference guides and downloadable sheets covering vital signs guide. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-ecg-basics",
    enum: "NURSING_ECG",
    title: "ECG Basics",
    description: "Reading strips and recognizing common rhythms.",
    overview: "Reading strips and recognizing common rhythms. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: HeartPulse,
    group: "nursing",
    faqs: [
      { question: "What is in the ECG Basics folder?", answer: "Quick-reference guides and downloadable sheets covering ecg basics. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
  {
    slug: "nursing-medication-administration",
    enum: "NURSING_MED_ADMIN",
    title: "Medication Administration",
    description: "The rights of administration, routes, and safety checks.",
    overview: "The rights of administration, routes, and safety checks. Practical, high-yield material for nursing students preparing for coursework, clinicals, and the NCLEX.",
    icon: Syringe,
    group: "nursing",
    faqs: [
      { question: "What is in the Medication Administration folder?", answer: "Quick-reference guides and downloadable sheets covering medication administration. Upload your own files anytime from the admin." },
      { question: "How should I use these?", answer: "Review them alongside your coursework and clinical practice, and use them for fast recall before exams." },
    ],
  },
];

export function getResourceCategoryBySlug(slug: string): ResourceCategoryDef | undefined {
  return resourceCategories.find((c) => c.slug === slug);
}

export function getResourceCategoryByEnum(value: ResourceCategory): ResourceCategoryDef | undefined {
  return resourceCategories.find((c) => c.enum === value);
}
