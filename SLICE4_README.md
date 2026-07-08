# Slice 4 — Admin dashboard redesign

Front-end only. No database changes, no seed — just replace files and push.

## What changed
- The client site header (with the "Request Consultation" button) and the site
  footer no longer appear on /admin pages. The admin now uses only its own clean
  shell — no wasted space.
- The dashboard now captures the WHOLE site at a glance, in compact floating
  panels instead of one long column:
  - a welcome banner with warm photo accents,
  - "needs attention" chips (new consultations + pending access requests),
  - three grouped stat panels: Leads, Question Bank (sections / quizzes /
    resource links / downloads), and Students & content,
  - a "Latest activity" feed next to a "Manage" quick-links panel
    (Question Bank, Students, Access Requests, Resources & Books).

## Install
1. Extract over your hello-clinica folder -> Replace all (4 files).
2. Test:  npm run dev
   - Open any /admin page: the site's top nav and footer are gone; only the
     admin shell shows.
   - Open /admin/dashboard: compact panels, photo accents, and the new
     Question Bank / Students / Access Requests numbers.
3. Push:
       git add .
       git commit -m "Slice 4: admin dashboard redesign, hide site chrome in admin"
       git push

(The photo accents use public/images/medics/medic-2/3/5.jpg — already on your
site from Slice 1.)
