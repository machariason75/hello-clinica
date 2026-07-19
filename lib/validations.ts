import { z } from "zod";

/**
 * Shared Zod schemas — used for BOTH client validation (react-hook-form) and
 * server validation (server actions), per CLAUDE_CODING_RULES form rules.
 */

export const newsletterSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "Please provide your email address.").email("Please provide a valid email address."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree to receive newsletters to subscribe." }),
  }),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const cadreOptions = [
  "Pre-Med",
  "Medical Student",
  "International Medical Graduate",
  "Nursing Student",
  "Nurse Practitioner Student",
  "Physician Assistant Student",
  "Dental Student",
  "Pharmacy Student",
  "Other",
] as const;

export const contactReasonOptions = [
  "General Question",
  "Advising Services",
  "Application Review",
  "Exam Coaching",
  "Consultation Packages",
  "Books & Resources",
  "Other",
] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name."),
  lastName: z.string().trim().min(1, "Please enter your last name."),
  email: z.string().trim().min(1, "Please provide your email address.").email("Please provide a valid email address."),
  phone: z.string().trim().min(1, "Please enter your phone number."),
  cadre: z.enum(cadreOptions, { errorMap: () => ({ message: "Please select your current stage." }) }),
  reason: z.enum(contactReasonOptions, { errorMap: () => ({ message: "Please select a reason for contact." }) }),
  message: z.string().trim().min(1, "Please include a short message."),
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: "Please accept the terms to continue." }),
  }),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const packageInquirySchema = z.object({
  studentFirstName: z.string().trim().min(1, "Please enter your first name."),
  studentLastName: z.string().trim().min(1, "Please enter your last name."),
  studentEmail: z
    .string()
    .trim()
    .min(1, "Please provide your email address.")
    .email("Please provide a valid email address."),
  studentPhone: z.string().trim().min(1, "Please enter your phone number."),
  message: z.string().trim().optional(),
});
export type PackageInquiryInput = z.infer<typeof packageInquirySchema>;

export const contactMethodOptions = [
  "WhatsApp",
  "Email",
  "Instagram",
  "Facebook",
  "TikTok",
] as const;

/** A handle/username is required for every method except Email. */
export function methodNeedsHandle(method: string): boolean {
  return method !== "" && method !== "Email";
}

export const consultationSchema = z
  .object({
    firstName: z.string().trim().min(1, "Please enter your first name."),
    lastName: z.string().trim().min(1, "Please enter your last name."),
    phone: z.string().trim().min(1, "Please enter your phone number."),
    email: z
      .string()
      .trim()
      .min(1, "Please provide your email address.")
      .email("Please provide a valid email address."),
    cadre: z.enum(cadreOptions, {
      errorMap: () => ({ message: "Please select your current stage." }),
    }),
    contactMethod: z.enum(contactMethodOptions, {
      errorMap: () => ({ message: "Please select a preferred contact method." }),
    }),
    socialHandle: z.string().trim().optional(),
    message: z.string().trim().optional(),
    consent: z.literal(true, {
      errorMap: () => ({ message: "Please agree to be contacted to continue." }),
    }),
  })
  .refine(
    (data) => !methodNeedsHandle(data.contactMethod) || !!data.socialHandle?.trim(),
    {
      message: "Please provide your username or number for the selected method.",
      path: ["socialHandle"],
    }
  );
export type ConsultationInput = z.infer<typeof consultationSchema>;
