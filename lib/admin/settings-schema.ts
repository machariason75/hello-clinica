import { z } from "zod";

export const settingsSchema = z.object({
  siteName: z.string().trim().min(1, "Site name is required."),
  siteEmail1: z.string().trim().email("Enter a valid email."),
  siteEmail2: z
    .string()
    .trim()
    .email("Enter a valid email.")
    .optional()
    .or(z.literal("")),
  footerText: z.string().trim().optional().or(z.literal("")),
  copyrightText: z.string().trim().optional().or(z.literal("")),
  instagram: z.string().trim().url("Enter a valid URL.").optional().or(z.literal("")),
  facebook: z.string().trim().url("Enter a valid URL.").optional().or(z.literal("")),
  tiktok: z.string().trim().url("Enter a valid URL.").optional().or(z.literal("")),
  youtube: z.string().trim().url("Enter a valid URL.").optional().or(z.literal("")),
});

export type SettingsFormInput = z.infer<typeof settingsSchema>;

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
};
