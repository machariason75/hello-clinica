/**
 * Medical-school disciplines. These are SUB-folders shown inside the
 * "Medical School Books" category — the other top-level categories
 * (Recommended, Nursing, NCLEX, Study Guides, Digital Downloads) are unchanged.
 *
 * A book's discipline is stored as one of these slugs in Book.discipline
 * (nullable). Books outside Medical School Books leave it null.
 */
export type BookDisciplineDef = { slug: string; title: string; description: string };

export const bookDisciplines: BookDisciplineDef[] = [
  { slug: "anatomy", title: "Anatomy", description: "Gross anatomy, histology, embryology, and atlases." },
  { slug: "physiology", title: "Physiology", description: "Human physiology and the mechanisms of body systems." },
  { slug: "biochemistry", title: "Biochemistry", description: "Metabolism, molecular biology, and medical biochemistry." },
  { slug: "pharmacology", title: "Pharmacology", description: "Drug classes, mechanisms, and clinical pharmacology." },
  { slug: "pathology", title: "Pathology", description: "General and systemic pathology, and mechanisms of disease." },
  { slug: "microbiology-immunology", title: "Microbiology & Immunology", description: "Medical microbiology, infectious disease, and immunology." },
  { slug: "behavioral-science", title: "Behavioral Science", description: "Behavioral science, psychiatry, and medical ethics." },
  { slug: "clinical-medicine", title: "Clinical Medicine", description: "Internal medicine, clinical skills, and physical diagnosis." },
  { slug: "reference-other", title: "Reference & Other", description: "General references and titles spanning several disciplines." },
];

export const bookDisciplineSlugs: string[] = bookDisciplines.map((d) => d.slug);

export function getDisciplineBySlug(slug: string | null | undefined): BookDisciplineDef | undefined {
  return slug ? bookDisciplines.find((d) => d.slug === slug) : undefined;
}
