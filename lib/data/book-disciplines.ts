export type BookDisciplineDef = { slug: string; title: string; description: string };

/** Sub-sections (folders) per top-level category. A book's sub-section is stored
 *  in Book.discipline as one of these slugs. */
export const disciplinesByCategory: Record<string, BookDisciplineDef[]> = {
  MEDICAL_SCHOOL_BOOKS: [
    { slug: "anatomy", title: "Anatomy", description: "Gross anatomy, histology, embryology, and atlases." },
    { slug: "physiology", title: "Physiology", description: "Human physiology and the mechanisms of body systems." },
    { slug: "biochemistry", title: "Biochemistry", description: "Metabolism, molecular biology, and medical biochemistry." },
    { slug: "pharmacology", title: "Pharmacology", description: "Drug classes, mechanisms, and clinical pharmacology." },
    { slug: "pathology", title: "Pathology", description: "General and systemic pathology, and mechanisms of disease." },
    { slug: "microbiology-immunology", title: "Microbiology & Immunology", description: "Medical microbiology, infectious disease, and immunology." },
    { slug: "behavioral-science", title: "Behavioral Science", description: "Behavioral science, psychiatry, and medical ethics." },
    { slug: "clinical-medicine", title: "Clinical Medicine", description: "Internal medicine, clinical skills, and physical diagnosis." },
    { slug: "reference-other", title: "Reference & Other", description: "General references and multi-discipline titles." },
  ],
  NURSING_BOOKS: [
    { slug: "dosage-calculations", title: "Dosage & Calculations", description: "Dosage calculation practice, dimensional analysis, and nursing math." },
    { slug: "pharmacology", title: "Pharmacology", description: "Drug guides, cards, and pharmacology review for nurses." },
    { slug: "anatomy-physiology", title: "Anatomy, Physiology & Patho", description: "A&P, pathophysiology, and foundational sciences." },
    { slug: "nclex-board-review", title: "NCLEX & Board Review", description: "NCLEX review books, question banks, and board-prep notes." },
    { slug: "teas-hesi", title: "TEAS / HESI Entrance Exams", description: "Entrance-exam prep for nursing programs." },
    { slug: "clinical-specialties", title: "Clinical & Specialties", description: "Med-surg, mental health, maternity, pediatrics, and critical care." },
    { slug: "study-skills", title: "Study Skills & Bundles", description: "Nursing-school bundles, templates, mnemonics, and study strategies." },
  ],
  STUDY_GUIDES: [ // displayed as "Study Resources"
    { slug: "orthopaedics-trauma", title: "Orthopaedics & Trauma", description: "Fractures, trauma, joints, and orthopaedic references." },
    { slug: "surgery", title: "Surgery", description: "Operative notes and surgical revision material." },
    { slug: "emergency-critical-care", title: "Emergency & Critical Care", description: "ATLS, ACLS, and critical-care support." },
    { slug: "internal-medicine", title: "Internal Medicine", description: "Clinical medicine questions and references." },
  ],
};

/** Flat list of every discipline (backward-compatible). */
export const bookDisciplines: BookDisciplineDef[] = Object.values(disciplinesByCategory).flat();
export const bookDisciplineSlugs: string[] = bookDisciplines.map((d) => d.slug);

export function getDisciplinesForCategory(enumVal: string): BookDisciplineDef[] {
  return disciplinesByCategory[enumVal] ?? [];
}
export function getDisciplineBySlug(slug: string | null | undefined): BookDisciplineDef | undefined {
  return slug ? bookDisciplines.find((d) => d.slug === slug) : undefined;
}
