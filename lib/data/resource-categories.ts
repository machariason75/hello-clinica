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
    title: "Study Guides",
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
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export function getResourceCategoryBySlug(slug: string): ResourceCategoryDef | undefined {
  return resourceCategories.find((c) => c.slug === slug);
}

export function getResourceCategoryByEnum(value: ResourceCategory): ResourceCategoryDef | undefined {
  return resourceCategories.find((c) => c.enum === value);
}
