# Speed pass + Books NCLEX banner

## What changed (code-level speed wins)
1. CACHING — the public content pages (books, resources, advising detail) used to
   hit the database on EVERY visit (they were "force-dynamic"). They now cache the
   rendered page and refresh every 5 minutes (revalidate = 300). Visitors get an
   instant cached page instead of waiting on database queries. This is the biggest
   click-speed improvement.
2. LOADING STATE — added app/loading.tsx so navigation shows an instant skeleton
   instead of feeling frozen while a page loads.
3. IMAGES — the hero photos now use Next.js <Image> (automatic WebP/AVIF + correct
   sizing), so they download smaller and faster.

## Books page
Added the NCLEX study photo as a feature banner at the top of /books — softly
BLURRED behind the text (option b), so no branded book cover reads prominently.
"Browse the library" scrolls to the catalog.

## Install
1. Extract over your hello-clinica folder, keeping structure → Replace all.
2. Locally: Ctrl+C then npm run dev, and hard-refresh (Ctrl+Shift+R).
3. To put it live: commit + push to GitHub — Vercel redeploys automatically.
   (git add . ; git commit -m "speed + books banner" ; git push)

## IMPORTANT trade-off to know
Because public pages are now cached for 5 minutes, when you publish/edit content
in the admin it can take up to ~5 minutes to appear on the public site. That's
the cost of the speed. If you ever want a page to update instantly, tell me and
I'll lower its refresh time or wire on-demand refresh.

## The two biggest levers are in YOUR dashboards (only you can do these)
- REGION MATCH: In Vercel - Settings - Functions, set the region to US East
  (Washington, D.C. / iad1) to match your Supabase us-east-1. Mismatched regions
  add latency to every database call. This is the single highest-impact fix.
- SUPABASE always-on: the free tier auto-pauses (the error you hit). For a live,
  shared site, Supabase Pro keeps it awake so visitors never hit a cold start.
- Confirm DATABASE_URL uses the POOLED connection (port 6543) — yours did; just
  don't let it get swapped to the 5432 direct one on Vercel.
