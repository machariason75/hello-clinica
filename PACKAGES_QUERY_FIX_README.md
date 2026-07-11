# Fix — packages query export name

Your existing advising [service] page imports `getPublishedPackages`; my Drop D
used `getPackages`. This packages.ts exports BOTH (getPublishedPackages is an
alias of getPackages), so both pages work.

Install: extract -> Replace all (1 file) -> npm run dev -> commit & push.
