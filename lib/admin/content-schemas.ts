import { z } from "zod";

export const bookCategoryValues = [
  "RECOMMENDED_BOOKS",
  "MEDICAL_SCHOOL_BOOKS",
  "NURSING_BOOKS",
  "NCLEX_BOOKS",
  "STUDY_GUIDES",
  "DIGITAL_DOWNLOADS",
] as const;

export const resourceCategoryValues = [
  "MEDICAL_SCHOOL_ADMISSIONS",
  "APPLICATION_TIMELINE",
  "PERSONAL_STATEMENT_GUIDE",
  "INTERVIEW_GUIDE",
  "CLINICAL_EXPERIENCE",
  "VOLUNTEER_GUIDE",
  "SHADOWING_GUIDE",
  "STUDY_RESOURCES",
  "CAREER_EXPLORATION",
  "NURSING_RESOURCES",
  "NURSING_ANATOMY",
  "NURSING_PHYSIOLOGY",
  "NURSING_PHARMACOLOGY",
  "NURSING_DOSAGE",
  "NURSING_NCLEX_SHEETS",
  "NURSING_LAB_VALUES",
  "NURSING_MED_TERMINOLOGY",
  "NURSING_ABBREVIATIONS",
  "NURSING_ASSESSMENT",
  "NURSING_VITAL_SIGNS",
  "NURSING_ECG",
  "NURSING_MED_ADMIN",
] as const;

const optionalUrl = z
  .string()
  .trim()
  .url("Please enter a valid URL (starting with http).")
  .optional()
  .or(z.literal(""));

export const bookSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  author: z.string().trim().min(1, "Author is required."),
  description: z.string().trim().min(1, "Description is required."),
  category: z.enum(bookCategoryValues, {
    errorMap: () => ({ message: "Please choose a category." }),
  }),
  coverImage: optionalUrl,
  fileUrl: optionalUrl,
  featured: z.boolean(),
  published: z.boolean(),
});
export type BookFormInput = z.infer<typeof bookSchema>;

export const resourceSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  description: z.string().trim().min(1, "Description is required."),
  body: z.string().trim().optional().or(z.literal("")),
  category: z.enum(resourceCategoryValues, {
    errorMap: () => ({ message: "Please choose a category." }),
  }),
  thumbnail: optionalUrl,
  resourceFile: optionalUrl,
  featured: z.boolean(),
  published: z.boolean(),
});
export type ResourceFormInput = z.infer<typeof resourceSchema>;

/* ------------------------- Packages / Testimonials / FAQs ------------------------- */

export const packageSchema = z.object({
  packageName: z.string().trim().min(1, "Package name is required."),
  description: z.string().trim().min(1, "Description is required."),
  totalHours: z.coerce.number().int("Whole number of hours.").min(0, "Cannot be negative."),
  totalCost: z.coerce.number().int("Whole number.").min(0, "Cannot be negative."),
  features: z
    .array(z.string().trim().min(1))
    .min(1, "Add at least one feature."),
  buttonText: z.string().trim().min(1, "Button text is required."),
  published: z.boolean(),
});
export type PackageFormInput = z.infer<typeof packageSchema>;

export const testimonialSchema = z.object({
  studentName: z.string().trim().min(1, "Student name is required."),
  program: z.string().trim().optional().or(z.literal("")),
  headline: z.string().trim().min(1, "Headline is required."),
  content: z.string().trim().min(1, "Story is required."),
  photo: z
    .string()
    .trim()
    .url("Please enter a valid URL (starting with http).")
    .optional()
    .or(z.literal("")),
  featured: z.boolean(),
  published: z.boolean(),
});
export type TestimonialFormInput = z.infer<typeof testimonialSchema>;

export const faqCategoryValues = [
  "GENERAL",
  "ADMISSIONS_ADVISING",
  "APPLICATION_REVIEW",
  "INTERVIEW_COACHING",
  "CONSULTATION_PACKAGES",
  "BOOKS",
  "RESOURCES",
  "CONTACT",
] as const;

export const faqSchema = z.object({
  category: z.enum(faqCategoryValues, {
    errorMap: () => ({ message: "Please choose a category." }),
  }),
  question: z.string().trim().min(1, "Question is required."),
  answer: z.string().trim().min(1, "Answer is required."),
  published: z.boolean(),
});
export type FaqFormInput = z.infer<typeof faqSchema>;

/* ----------------------- QUESTION BANK (Slice 2) ----------------------- */

export const quizCategorySchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required.")
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only."),
  description: z.string().trim().min(1, "Description is required."),
  overview: z.string().trim().optional().or(z.literal("")),
  icon: z.string().trim().optional().or(z.literal("")),
  parentId: z.string().trim().optional().or(z.literal("")),
  order: z.coerce.number().int("Whole number.").min(0, "Cannot be negative."),
  featured: z.boolean(),
  published: z.boolean(),
});
export type QuizCategoryFormInput = z.infer<typeof quizCategorySchema>;

export const quizExternalLinkSchema = z.object({
  categoryId: z.string().trim().min(1, "Choose a category."),
  title: z.string().trim().min(1, "Title is required."),
  url: z.string().trim().url("Enter a valid URL (including https://)."),
  description: z.string().trim().optional().or(z.literal("")),
  thumbnailUrl: z.string().trim().url("Enter a valid image URL.").optional().or(z.literal("")),
  source: z.string().trim().optional().or(z.literal("")),
  order: z.coerce.number().int("Whole number.").min(0, "Cannot be negative."),
  published: z.boolean(),
});
export type QuizExternalLinkFormInput = z.infer<typeof quizExternalLinkSchema>;

/* ----------------------- STUDENT ACCOUNTS (Slice 3) -------------------- */

export const studentRegisterSchema = z.object({
  name: z.string().trim().min(1, "Your name is required."),
  email: z.string().trim().email("Enter a valid email."),
  password: z.string().min(8, "Use at least 8 characters."),
  university: z.string().trim().optional().or(z.literal("")),
});
export type StudentRegisterInput = z.infer<typeof studentRegisterSchema>;

export const studentLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email."),
  password: z.string().min(1, "Enter your password."),
});
export type StudentLoginInput = z.infer<typeof studentLoginSchema>;

export const courseRequestSchema = z.object({
  university: z.string().trim().min(1, "Tell us your college or university."),
  course: z.string().trim().min(1, "Tell us your course or program."),
  message: z.string().trim().optional().or(z.literal("")),
});
export type CourseRequestInput = z.infer<typeof courseRequestSchema>;

/* ----------------------- QUIZ AUTHORING (Drop A) ----------------------- */

export const quizSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required.")
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only."),
  categoryId: z.string().trim().min(1, "Choose a section."),
  description: z.string().trim().min(1, "A short description is required."),
  kind: z.enum(["PRACTICE", "EXAM"]),
  difficulty: z.string().trim().min(1, "Choose a difficulty."),
  timeLimitMinutes: z.coerce.number().int("Whole minutes.").min(0, "Cannot be negative.").max(600, "That seems too long."),
  passThreshold: z.coerce.number().int("Whole number.").min(1, "At least 1%.").max(100, "Max 100%."),
  featured: z.boolean(),
  published: z.boolean(),
  order: z.coerce.number().int().min(0),
});
export type QuizFormInput = z.infer<typeof quizSchema>;

export const questionChoiceSchema = z.object({
  text: z.string().trim().min(1, "Choice text is required."),
  isCorrect: z.boolean(),
});

export const questionSchema = z
  .object({
    type: z.enum(["SINGLE", "MULTI", "TRUE_FALSE", "FILL_BLANK"]),
    stem: z.string().trim().min(1, "The question text is required."),
    topic: z.string().trim().min(1, "A topic helps the results breakdown."),
    explanation: z.string().trim().min(1, "Add a rationale so students learn from it."),
    points: z.coerce.number().int().min(1, "At least 1 point.").max(20),
    choices: z.array(questionChoiceSchema).min(2, "Add at least two choices."),
  })
  .refine((q) => q.choices.some((c) => c.isCorrect), {
    message: "Mark at least one choice as correct.",
    path: ["choices"],
  })
  .refine((q) => q.type !== "SINGLE" || q.choices.filter((c) => c.isCorrect).length === 1, {
    message: "Single-answer questions need exactly one correct choice.",
    path: ["choices"],
  });
export type QuestionFormInput = z.infer<typeof questionSchema>;

/** Suggested exam time (minutes) for a question count — ~1.1 min/question, rounded to 5. */
export function suggestedMinutes(questionCount: number): number {
  if (questionCount <= 0) return 0;
  const raw = questionCount * 1.1;
  return Math.max(5, Math.round(raw / 5) * 5);
}
