import {
  Compass,
  FileText,
  MessagesSquare,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/**
 * The four advising services (taxonomy, per Content Structure + System
 * Architecture). "consultation-packages" is rendered specially: it lists the
 * admin-managed packages from the `packages` table with an inquiry form.
 */
export type AdvisingServiceDef = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  includes: string[];
  faqs: { question: string; answer: string }[];
  isPackages?: boolean;
};

export const advisingServiceDefs: AdvisingServiceDef[] = [
  {
    slug: "admissions-advising",
    title: "Admissions Advising",
    description: "One-on-one guidance across your whole application.",
    overview:
      "Work directly with an advisor on the full picture of your application — school list, strategy, timeline, and positioning — so every piece works together toward your goal.",
    icon: Compass,
    includes: [
      "Personalized school-list strategy",
      "Application timeline planning",
      "Positioning and narrative guidance",
      "Ongoing one-on-one support",
    ],
    faqs: [
      { question: "Who is admissions advising for?", answer: "Applicants who want a clear strategy and a knowledgeable partner across the whole process, at any stage from early planning to active application." },
      { question: "How are sessions delivered?", answer: "Sessions are conducted one-on-one. After you reach out, we match you with an advisor and arrange times that fit your schedule." },
    ],
  },
  {
    slug: "application-review",
    title: "Application Review",
    description: "Detailed feedback on your written application before you submit.",
    overview:
      "Get thorough, candid feedback on your personal statement, activities, and secondary essays — so you submit your strongest, most authentic application.",
    icon: FileText,
    includes: [
      "Personal statement review",
      "Activities and experience descriptions",
      "Secondary essay feedback",
      "Line-by-line suggestions",
    ],
    faqs: [
      { question: "What can I have reviewed?", answer: "Your personal statement, activity descriptions, and secondary essays. We focus on clarity, authenticity, and impact." },
      { question: "How long does a review take?", answer: "Turnaround depends on the length and scope, and is agreed up front so it fits your deadlines." },
    ],
  },
  {
    slug: "interview-coaching",
    title: "Interview Coaching",
    description: "Mock interviews and tailored feedback to build confidence.",
    overview:
      "Practice with realistic mock interviews across formats — traditional, panel, and MMI — and receive specific feedback to help you communicate clearly under pressure.",
    icon: MessagesSquare,
    includes: [
      "Realistic mock interviews",
      "Traditional, panel, and MMI formats",
      "Specific, actionable feedback",
      "Strategies for telling your story",
    ],
    faqs: [
      { question: "Which interview formats do you cover?", answer: "Traditional one-on-one, panel, and multiple mini-interview (MMI) formats, tailored to the schools you're preparing for." },
      { question: "How should I prepare?", answer: "Come ready to practice as if it's the real thing. We'll debrief afterward with concrete ways to improve." },
    ],
  },
  {
    slug: "consultation-packages",
    title: "Consultation Packages",
    description: "Flexible packages that bundle advising hours for key milestones.",
    overview:
      "Choose a package that bundles advising hours to support you through the milestones that matter most. Compare options below and submit an inquiry — our team will follow up to help you get started.",
    icon: HeartHandshake,
    includes: [],
    faqs: [
      { question: "How do packages work?", answer: "Each package bundles a set number of advising hours and features. Submit an inquiry for the one that fits, and we'll follow up to arrange the details." },
      { question: "Can pricing or hours change?", answer: "Packages are kept up to date by our team. The options shown here reflect current offerings." },
    ],
    isPackages: true,
  },
];

export function getAdvisingServiceBySlug(slug: string): AdvisingServiceDef | undefined {
  return advisingServiceDefs.find((s) => s.slug === slug);
}
