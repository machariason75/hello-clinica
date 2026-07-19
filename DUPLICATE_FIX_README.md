# Fix — duplicate "Read online" button on book pages

## What you saw
Two "Read online" buttons: a dark teal one, and a coral one paired with
"Download book".

## Why
Your DownloadButton component ALREADY renders the pair
"Read online" + "Download book". I shipped the whole book page from my copy,
and my version added a SEPARATE standalone Read online button above it — so both
appeared.

The mistake was shipping an entire shared page when the only thing I actually
needed to add was the Listen button. Same error pattern as validations.ts.

## What this fixes (1 file)
- Removed the duplicate standalone Read online button (and its now-unused import).
  Your DownloadButton keeps providing Read online + Download exactly as before.
- Moved "Listen to the audiobook" to sit BELOW the Read/Download pair, and
  restyled it TEAL rather than coral — so the hierarchy reads properly:
      Read online   (coral, primary free action)
      Download book (outlined, premium)
      Listen        (teal, the alternative way to consume it)

## Install
1. Extract the CONTENTS -> Replace all (1 file:
   app/books/[category]/[book]/page.tsx).
2. npx tsc --noEmit     <- expect no errors
   npm run dev          <- check a book page: ONE Read online button
3. git add .
   git commit -m "fix: remove duplicate Read online button on book pages"
   git push

## Optional tidy-up
components/reader/ReadOnlineButton.tsx is now unused (nothing imports it). It
does no harm — unused files don't affect the build or the site — but you can
delete it if you'd like the codebase clean:
    del components\reader\ReadOnlineButton.tsx
