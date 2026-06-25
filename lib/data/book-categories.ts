import type { BookCategory } from "@prisma/client";

/** The four fixed book categories (taxonomy, per Content Structure). */
export type BookCategoryDef = {
  slug: string;
  enum: BookCategory;
  title: string;
  description: string;
};

export const bookCategories: BookCategoryDef[] = [
  {
    slug: "recommended-books",
    enum: "RECOMMENDED_BOOKS",
    title: "Recommended Books",
    description: "Our advisors' most-recommended reads for premed and medical students.",
  },
  {
    slug: "medical-school-books",
    enum: "MEDICAL_SCHOOL_BOOKS",
    title: "Medical School Books",
    description: "Core textbooks and references used throughout medical school.",
  },
  {
    slug: "study-guides",
    enum: "STUDY_GUIDES",
    title: "Study Guides",
    description: "Focused study guides and high-yield review materials.",
  },
  {
    slug: "digital-downloads",
    enum: "DIGITAL_DOWNLOADS",
    title: "Digital Downloads",
    description: "Downloadable workbooks, checklists, and digital study tools.",
  },
];

export function getBookCategoryBySlug(slug: string): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.slug === slug);
}

export function getBookCategoryByEnum(value: BookCategory): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.enum === value);
}
