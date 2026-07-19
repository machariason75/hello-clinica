import {
  Compass,
  FileText,
  Target,
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
    slug: "exam-coaching",
    title: "Exam Coaching",
    description: "One-on-one coaching for the exam standing between you and the next step.",
    overview:
      "Whether it's the NCLEX, USMLE, TEAS, HESI, or NAPLEX, most people don't fail for lack of effort — they fail because their preparation isn't aimed at how the exam actually tests them. We build a study plan around your timeline, work through your weak areas, and teach you to read questions the way examiners write them. It pairs naturally with the Question Bank, so what you practise between sessions is the same material we review together.",
    icon: Target,
    includes: [
      "A study plan built around your exam date",
      "Diagnostic review to find your real weak areas",
      "Question-reading and test-taking technique",
      "Timing and pacing strategy for the exam room",
      "Managing exam anxiety and burnout",
      "Guided practice using the Hello Clinica Question Bank",
    ],
    faqs: [
      { question: "Which exams do you coach for?", answer: "NCLEX-RN and NCLEX-PN, USMLE Steps 1-3, TEAS, HESI A2, and the pharmacy licensing exams (NAPLEX and MPJE). If your exam isn't listed, ask — the approach transfers to most standardised health-science exams." },
      { question: "How soon before my exam should we start?", answer: "Six to eight weeks gives us room to diagnose weak areas and rebuild them properly. That said, focused coaching helps even a week or two out — at that point we concentrate on strategy, pacing, and steadying your nerves rather than new content." },
      { question: "I've already failed once. Can coaching help?", answer: "Yes, and this is some of the most rewarding work we do. A retake needs a different plan, not simply more hours. We start by working out what actually went wrong — content gaps, timing, question interpretation, or anxiety — and rebuild from there." },
      { question: "Do I need Question Bank access as well?", answer: "It isn't required, but it helps a great deal. Coaching works best when you practise between sessions and we review your results together, so we can see exactly which topics need attention." },
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
