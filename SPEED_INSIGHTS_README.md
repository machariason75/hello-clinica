# Vercel Speed Insights

Adds Vercel's real-visitor performance tracking.

## Order of steps
1. In your terminal (project folder), install the package:
       npm i @vercel/speed-insights --legacy-peer-deps
2. Extract this zip over your hello-clinica folder (Replace app/layout.tsx).
3. Push live:
       git add .
       git commit -m "add Vercel Speed Insights"
       git push
4. Visit your live .vercel.app site and click around a few pages.
   Data appears in Vercel - your project - Speed Insights after a short while.

Note: Speed Insights only collects data on the LIVE Vercel site, not on
localhost. Locally it stays quiet, which is normal.
