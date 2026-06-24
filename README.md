# Hello Clinica — Phase 1 (Foundation)

Medical-education & advising platform. This package is the **Phase 1 foundation**:
design system, layout, navigation, animation and SEO systems, the homepage, the
core routes, and the database setup. Resources, Books, and the Admin area are
intentionally **not** built here — they extend this foundation in later phases.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn-style UI ·
Framer Motion · Prisma · PostgreSQL · NextAuth**.

---

## 1. Prerequisites

- **Node.js 18.18+** (Node 20 LTS recommended)
- **A PostgreSQL database.** The schema is configured for Supabase (pooled
  `DATABASE_URL` + direct `DIRECT_URL`), but any PostgreSQL instance works.

## 2. Install

```bash
npm install
```

`postinstall` runs `prisma generate` automatically.

## 3. Configure environment

```bash
cp .env.example .env
```

Fill in `.env`. Minimum required to run the site and database:

| Variable | Required | Notes |
| --- | --- | --- |
| `DATABASE_URL` | ✅ | Pooled connection string (app runtime) |
| `DIRECT_URL` | ✅ | Direct connection (Prisma migrations) |
| `NEXTAUTH_SECRET` | ✅ | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | ✅ | e.g. `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Used for canonical URLs / sitemap |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD_HASH` / `ADMIN_NAME` | ✅ (to seed admin) | See step 5 |
| `RESEND_API_KEY`, `FROM_EMAIL`, `NOTIFY_EMAIL_*` | ⛔ optional in Phase 1 | Email delivery activates in a later phase; submissions are saved to the DB regardless |
| `UPLOADTHING_*`, `NEXT_PUBLIC_POSTHOG_*` | ⛔ optional | Used by later phases |

> **Email in Phase 1:** Newsletter and contact submissions are **saved to the
> database first** and always succeed for the user. If `RESEND_API_KEY` is set,
> notifications also send immediately; if not, each attempt is recorded in the
> `email_logs` table as `PENDING` so the later email phase can retry. No data is
> ever lost.

## 4. Create the database tables

```bash
npm run db:migrate      # development: creates + applies the migration
# or, against an existing/managed DB:
npm run db:deploy       # applies committed migrations (production)
```

## 5. Create the admin password hash, then seed

The first Super Admin is seeded from your env vars. Generate a bcrypt hash for
your chosen password (never store plaintext):

```bash
npm run hash:password "YourStrongPassword123!"
```

Copy the printed `ADMIN_PASSWORD_HASH=...` value into `.env`, then seed:

```bash
npm run db:seed
```

This creates the Super Admin and the single `site_settings` row. The seed is
idempotent — safe to re-run.

## 6. Run

```bash
npm run dev            # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

---

## Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | `prisma generate` + production build |
| `npm start` | Run the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run db:migrate` | Create & apply a dev migration |
| `npm run db:deploy` | Apply migrations (production) |
| `npm run db:seed` | Seed admin + site settings |
| `npm run db:studio` | Open Prisma Studio |
| `npm run hash:password "pw"` | Print a bcrypt hash for an admin password |

---

## What's included in Phase 1

**Systems:** theme/design tokens (frozen palette, type scale, spacing, radius,
shadows, gradient), App Router layout, navigation + 360px sidebar drawer, search
modal, back button, responsive system (320 → 1920), animation system (fade
up/left/right, scale-in, stagger, parallax, 300ms page transitions, reduced-motion
respected), SEO system (per-page metadata, Open Graph, canonical, JSON-LD,
`sitemap.xml`, `robots.txt`).

**Components:** Navbar, Sidebar, Footer, BackButton, SearchModal, Hero, Resource/
Service/Book/Testimonial cards, CTA section, Newsletter form, FAQ accordion, plus
UI primitives (button, input, textarea, label, checkbox, select, dialog) and
common helpers (Container, Section, SectionHeading, EmptyState, LoadingSpinner,
PageHero, LegalPage, JsonLd, Toaster).

**Routes:** `/`, `/about`, `/contact`, `/privacy-policy`, `/terms-of-service`,
`/cookie-policy`, plus minimal hubs `/resources`, `/advising`, `/books` (so the
frozen navigation has no broken links), a custom `404`, and the NextAuth API
route.

**Homepage sections (in order):** Hero · Trust Indicators · Featured Resources ·
Advising Services · Books · Testimonials · Newsletter · Contact CTA · Footer.

**Database:** Prisma schema with all 16 specified tables (plus documented
additive fields/tables for delivery-status logging, archive-not-delete, and
login throttling), a singleton Prisma client, and an idempotent seed.

## Manual test checklist

1. **Homepage** renders all nine sections; hero shows the gradient + AI
   illustration placeholder; cards lift on hover.
2. **Navigation:** hamburger opens the sidebar (Esc closes, focus trapped);
   every sidebar link lands on a real page.
3. **Search:** open from navbar/sidebar; typing filters results; each result
   navigates correctly.
4. **Back button** appears on internal pages (not the homepage) and returns to
   the previous page.
5. **Newsletter:** invalid input shows inline errors; a valid submit creates a
   row in `newsletter_subscribers` and shows the success state.
6. **Contact:** invalid input shows inline errors; a valid submit creates a row
   in `contact_requests`, records an `email_logs` entry, and shows the success
   message.
7. **Responsive:** check 320 / 375 / 768 / 1024 / 1440 / 1920px.
8. **Accessibility:** tab through the page — visible focus rings everywhere;
   enable "reduce motion" and confirm animations are suppressed.
9. **SEO:** visit `/sitemap.xml` and `/robots.txt`; view source for per-page
   titles and JSON-LD.

## Notes for later phases

- Homepage Featured Resources / Books / Testimonials and the FAQ currently read
  from typed foundation arrays in `lib/data/homepage-content.ts`. Later phases
  swap the **data source** to Prisma queries — the components don't change.
- The search modal indexes published pages today; later phases extend it with
  `search_index` rows for resources, books, and FAQs.
- NextAuth + `middleware.ts` already protect `/admin/*`; the admin UI is built in
  the Admin phase.
