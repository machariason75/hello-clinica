import type { BookCategory } from "@prisma/client";

/** Book category taxonomy (top-level trees shown in the Books section). */
export type BookCategoryDef = {
  slug: string;
  enum: BookCategory;
  title: string;
  description: string;
};

export const bookCategories: BookCategoryDef[] = [
  {
    slug: "medical-school-books",
    enum: "MEDICAL_SCHOOL_BOOKS",
    title: "Medical School Books",
    description: "Core textbooks and references used throughout medical school.",
  },
  {
    slug: "nursing-books",
    enum: "NURSING_BOOKS",
    title: "Nursing Books",
    description: "Nursing texts and references organized by topic — including NCLEX & board review.",
  },
  {
    slug: "nclex-books",
    enum: "NCLEX_BOOKS",
    title: "NCLEX Books",
    description: "Review books and question banks focused on NCLEX preparation.",
  },
  {
    slug: "mpje-books",
    enum: "MPJE_BOOKS",
    title: "MPJE Books",
    description: "Multistate Pharmacy Jurisprudence Exam review materials and law references.",
  },
  {
    slug: "usmle-books",
    enum: "USMLE_BOOKS",
    title: "USMLE Books",
    description: "Review books and question banks for USMLE Step preparation.",
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
  {
    slug: "recommended-books",
    enum: "RECOMMENDED_BOOKS",
    title: "Recommended Books",
    description: "Our advisors' most-recommended reads for premed and medical students.",
  },
];

export function getBookCategoryBySlug(slug: string): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.slug === slug);
}

export function getBookCategoryByEnum(value: BookCategory): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.enum === value);
}
