import {
  ClipboardList,
  FileText,
  MessagesSquare,
  CalendarClock,
  Microscope,
  GraduationCap,
  HeartHandshake,
  Compass,
  type LucideIcon,
} from "lucide-react";
import type { ResourceCardData } from "@/components/cards/ResourceCard";
import type { ServiceCardData } from "@/components/cards/ServiceCard";
import type { BookCardData } from "@/components/cards/BookCard";
import type { TestimonialData } from "@/components/cards/TestimonialCard";
import type { FaqItem } from "@/components/sections/FaqAccordion";

/**
 * FOUNDATION DISPLAY CONTENT (Phase 1).
 *
 * These typed arrays let the homepage render as a complete, production-quality
 * page now. In later phases they are replaced — without touching any component
 * — by live queries against the `resources`, `packages`, `books`, `testimonials`
 * and `faqs` tables (all already defined in schema.prisma). Featured resource
 * and book cards intentionally link to their hub routes, never to detail pages
 * that don't exist yet, so there are no broken links.
 *
 * Copy here is original to Hello Clinica.
 */

export type TrustStat = { value: string; label: string; icon: LucideIcon };

export const trustStats: TrustStat[] = [
  { value: "10+", label: "Years guiding applicants", icon: GraduationCap },
  { value: "1,200+", label: "Advising conversations", icon: MessagesSquare },
  { value: "40+", label: "Free guides & resources", icon: FileText },
  { value: "9", label: "Stages supported, pre-med to residency", icon: Compass },
];

export const featuredResources: ResourceCardData[] = [
  {
    title: "Medical School Admissions",
    description: "A clear walkthrough of what selective programs look for and how to position your application.",
    href: "/resources",
    icon: ClipboardList,
  },
  {
    title: "Application Timeline",
    description: "Month-by-month planning so nothing important slips through the cracks during your cycle.",
    href: "/resources",
    icon: CalendarClock,
  },
  {
    title: "Personal Statement Guide",
    description: "Frameworks and prompts to help you write an essay that sounds like you — and lands.",
    href: "/resources",
    icon: FileText,
  },
  {
    title: "Interview Preparation",
    description: "Practice structures, common formats, and ways to tell your story with confidence.",
    href: "/resources",
    icon: MessagesSquare,
  },
  {
    title: "Clinical & Shadowing Experience",
    description: "How to find meaningful exposure and reflect on it in a way admissions committees value.",
    href: "/resources",
    icon: Microscope,
  },
  {
    title: "Study & Career Resources",
    description: "Curated tools for coursework, standardized exams, and exploring paths within medicine.",
    href: "/resources",
    icon: Compass,
  },
];

export const advisingServices: ServiceCardData[] = [
  {
    title: "Admissions Advising",
    description: "One-on-one guidance across your whole application — school list, strategy, and positioning.",
    href: "/advising",
    icon: Compass,
  },
  {
    title: "Application Review",
    description: "Detailed feedback on your personal statement, activities, and secondaries before you submit.",
    href: "/advising",
    icon: FileText,
  },
  {
    title: "Interview Coaching",
    description: "Mock interviews and tailored feedback to help you communicate clearly under pressure.",
    href: "/advising",
    icon: MessagesSquare,
  },
  {
    title: "Consultation Packages",
    description: "Flexible packages that bundle advising hours to support you through key milestones.",
    href: "/advising",
    icon: HeartHandshake,
  },
];

export const featuredBooks: BookCardData[] = [
  { title: "The Pre-Med Roadmap", author: "Hello Clinica", category: "Recommended", href: "/books" },
  { title: "Personal Statements That Connect", author: "Hello Clinica", category: "Study Guide", href: "/books" },
  { title: "Interview Day, Demystified", author: "Hello Clinica", category: "Study Guide", href: "/books" },
  { title: "Choosing Your Path in Medicine", author: "Hello Clinica", category: "Recommended", href: "/books" },
];

export const testimonials: TestimonialData[] = [
  {
    studentName: "Amara N.",
    program: "Medical Student",
    headline: "I finally understood what to prioritize.",
    story:
      "The advising sessions turned a confusing process into a clear plan. I walked into interviews knowing exactly how to tell my story.",
  },
  {
    studentName: "Jasmine R.",
    program: "BSN Student",
    headline: "My NCLEX prep finally had a structure.",
    story:
      "I went from random studying to a focused weekly plan. The recommended books and practice approach made the material click.",
  },
  {
    studentName: "Daniel K.",
    program: "Pre-Med Student",
    headline: "The timeline kept me on track all year.",
    story:
      "Having a realistic month-by-month plan meant I was never scrambling. Every deadline felt manageable instead of overwhelming.",
  },
  {
    studentName: "Grace M.",
    program: "RN Graduate",
    headline: "Confident going into my first role.",
    story:
      "The clinical refreshers and lab-value guides were exactly what I needed to feel ready. I started my first job far less anxious.",
  },
  {
    studentName: "Priya S.",
    program: "International Student",
    headline: "Guidance that understood my situation.",
    story:
      "I had specific questions no generic guide answered. The personalized advice made all the difference for my path.",
  },
  {
    studentName: "Marcus T.",
    program: "Nurse Practitioner Student",
    headline: "Support that scaled with my goals.",
    story:
      "As I moved from RN toward NP, the advising kept up with where I was — practical, specific, and never one-size-fits-all.",
  },
  {
    studentName: "Sofia L.",
    program: "Pharmacy Student",
    headline: "Resources that fit my field, not just one path.",
    story:
      "I worried everything would be med-school focused, but the guidance spoke to pharmacy too. It helped me plan rotations and stay organized.",
  },
  {
    studentName: "Priya S.",
    program: "TEAS 7 Applicant",
    headline: "The TEAS practice felt just like exam day.",
    story:
      "Working through the timed reading and science sets built my pacing. I walked in calm and hit my target score.",
  },
  {
    studentName: "Marcus O.",
    program: "HESI A2 Applicant",
    headline: "HESI A2 stopped feeling scary.",
    story:
      "The topic breakdown showed me exactly where I was weak. A week of focused practice and my score jumped.",
  },
  {
    studentName: "Lindiwe M.",
    program: "ATI Nursing Student",
    headline: "The rationales are what made it stick.",
    story:
      "Every ATI-style question explained why the wrong answers were wrong. That's how I actually learned the content.",
  },
  {
    studentName: "Kevin T.",
    program: "USMLE Step 1",
    headline: "Consistent practice, real progress.",
    story:
      "Tracking my attempts and grades kept me honest. I could see myself improving week over week toward Step 1.",
  },
  {
    studentName: "Aisha B.",
    program: "NCLEX-RN Candidate",
    headline: "Passed the NCLEX on my first try.",
    story:
      "The mix of practice and real-exam mode got me ready for the pressure. The review history was my secret weapon.",
  },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: "Who does Hello Clinica help?",
    answer:
      "We support students across the healthcare journey — from pre-med and medical students to international medical graduates and allied health applicants exploring their next step.",
  },
  {
    question: "Are the resources really free?",
    answer:
      "Yes. Our library of guides and resources is free to read. Advising services and select books are paid offerings for those who want personalized, one-on-one support.",
  },
  {
    question: "How does advising work?",
    answer:
      "You choose a service or package, share where you are in your journey, and we match the guidance to your goals — whether that's a full application review or focused interview coaching.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through our contact page with a short note about your goals. A member of our team will follow up to help you find the right next step.",
  },
  {
    question: "How do I prepare for the NCLEX?",
    answer:
      "Start with a realistic study schedule, work through a trusted review book, and practice questions consistently rather than cramming. Focus on understanding the rationale behind each answer — why it's right or wrong — not just memorizing facts.",
  },
  {
    question: "How does Hello Clinica help nursing students?",
    answer:
      "We bring together curated study guides, recommended books, and personalized advising for nursing students — from pre-nursing through BSN, RN, and advanced practice — so you have clear guidance and trusted resources at every step.",
  },
];
