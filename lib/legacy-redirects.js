/**
 * LEGACY URL REDIRECTS — British slugs that were renamed to American spellings.
 *
 * These addresses were live and may be bookmarked or indexed by Google, so they
 * must forward rather than 404. Generated from the actual rename output of
 * seed-americanize.ts.
 *
 * `permanent: true` sends HTTP 308, which tells search engines the move is
 * final and transfers the existing ranking to the new address. That is what you
 * want here — these old spellings are never coming back.
 *
 * Quiz routes use the `:category` wildcard because a quiz lives at
 * /question-bank/[category]/[quiz]. A visitor arriving at a fully old URL
 * (old category AND old quiz) is forwarded twice, which browsers and crawlers
 * both handle without complaint.
 *
 * Imported by next.config — see patch-redirects.ts.
 */

const CATEGORY_RENAMES = {
  "cs-paediatrics": "cs-pediatrics",
  "cs-obstetrics-gynaecology": "cs-obstetrics-gynecology",
  "cs-haematology": "cs-hematology",
};

const QUIZ_RENAMES = {
  "gynaecology-set-1": "gynecology-set-1",
  "gynaecology-set-2": "gynecology-set-2",
  "gynaecology-exam-1": "gynecology-exam-1",
  "paediatric-clinical-set-1": "pediatric-clinical-set-1",
  "paediatric-clinical-set-2": "pediatric-clinical-set-2",
  "paediatric-emergencies-set-1": "pediatric-emergencies-set-1",
  "paediatric-clinical-exam-1": "pediatric-clinical-exam-1",
  "paediatrics-comprehensive-exam-1": "pediatrics-comprehensive-exam-1",
  "orthopaedics-practice-set-1": "orthopedics-practice-set-1",
  "haematology-practice-set-1": "hematology-practice-set-1",
  "haematology-practice-set-2": "hematology-practice-set-2",
  "haematology-exam-1": "hematology-exam-1",
  "haematology-exam-2": "hematology-exam-2",
};

const redirects = [
  // Category pages, and anything nested beneath them.
  ...Object.entries(CATEGORY_RENAMES).flatMap(([from, to]) => [
    {
      source: `/question-bank/${from}`,
      destination: `/question-bank/${to}`,
      permanent: true,
    },
    {
      source: `/question-bank/${from}/:path*`,
      destination: `/question-bank/${to}/:path*`,
      permanent: true,
    },
  ]),

  // Individual quizzes, under whichever category they sit in.
  ...Object.entries(QUIZ_RENAMES).map(([from, to]) => ({
    source: `/question-bank/:category/${from}`,
    destination: `/question-bank/:category/${to}`,
    permanent: true,
  })),
];

module.exports = redirects;
