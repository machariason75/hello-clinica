import type { BookCategory } from "@prisma/client";

export type BookCategoryDef = { slug: string; enum: BookCategory; title: string; description: string };

/** Top-level book trees shown in the Books section, in display order.
 *  NCLEX and Digital Downloads are intentionally omitted: NCLEX now lives as a
 *  sub-section of Nursing Books, and Digital Downloads was retired (files moved
 *  to Free Resources). STUDY_GUIDES is relabeled "Study Resources" and
 *  RECOMMENDED_BOOKS is relabeled "Bookmarks" (user bookmarks) and shown last. */
export const bookCategories: BookCategoryDef[] = [
  { slug: "medical-school-books", enum: "MEDICAL_SCHOOL_BOOKS", title: "Medical School Books", description: "Core textbooks and references used throughout medical school." },
  { slug: "nursing-books", enum: "NURSING_BOOKS", title: "Nursing Books", description: "Nursing texts by topic — dosage, pharmacology, anatomy, NCLEX & board review, and more." },
  { slug: "mpje-books", enum: "MPJE_BOOKS", title: "MPJE Books", description: "Multistate Pharmacy Jurisprudence Exam review materials and law references." },
  { slug: "usmle-books", enum: "USMLE_BOOKS", title: "USMLE Books", description: "Review books and question banks for USMLE Step preparation." },
  { slug: "study-guides", enum: "STUDY_GUIDES", title: "Study Resources", description: "Clinical study resources — orthopaedics, surgery, emergency & critical care, and internal medicine." },
  { slug: "recommended-books", enum: "RECOMMENDED_BOOKS", title: "Bookmarks", description: "Books you've bookmarked, kept here for quick access." },
];

export function getBookCategoryBySlug(slug: string): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.slug === slug);
}
export function getBookCategoryByEnum(value: BookCategory): BookCategoryDef | undefined {
  return bookCategories.find((c) => c.enum === value);
}
