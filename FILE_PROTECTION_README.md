# File protection — Level 1 (deterrence) + Level 2 (hide the real file URL)

## The real problem this fixes
Before: the reader put the RAW UploadThing URL straight into the page. Anyone
could view source (or press Ctrl+S) and download the file — and that URL kept
working forever, for anyone, even without an account. That was the actual hole;
Ctrl+S was just the symptom.

## Level 2 (the important fix)
- The reader now streams the file through your own server:
  /api/read-file?type=book&id=... The real storage URL NEVER reaches the browser.
- The reader component no longer even receives the file URL (it gets hasFile/isPdf
  booleans instead), so it can't leak in the page source.
- /api/read-file now refuses requests that don't come from your own site
  (same-origin referer check), so the endpoint can't be pasted into a tab or
  hotlinked as a backdoor download.
- Responses are inline + no-store, so the file renders in the viewer and isn't
  cached in shared/CDN caches.
- Downloading still goes through /api/download, which stays premium-gated.

## Level 1 (deterrence, non-premium only)
- Ctrl+S / Cmd+S and Ctrl+P / Cmd+P are intercepted on the reader page, with a
  friendly "downloading and printing are premium — reading is free" message.
- Right-click (context menu) is disabled on the reader page.
- Premium users are unaffected: they can save and print freely.

## Honest limits (please read)
This stops casual copying, not a determined person. Once a browser renders a PDF,
the bytes are on that machine — someone who opens devtools can still retrieve
them, and nobody can stop a screenshot. Truly preventing this needs canvas/DRM
rendering, which degrades reading quality and still can't beat a camera. What we
have now closes the serious hole (a permanently public file URL) and the casual
one (Ctrl+S), which is the right trade for study material.

## Install
1. Extract the CONTENTS into your project (remember: don't nest a second
   hello-clinica folder) -> Replace all (3 files).
2. Verify:
       npx tsc --noEmit      <- expect no errors
       npm run dev
   Test as a NON-premium user: open a book -> Read online.
   - The PDF still displays.
   - Ctrl+S shows the premium message instead of saving.
   - Right-click is disabled.
   - View page source: the utfs.io/UploadThing URL is nowhere to be found.
   Then as a PREMIUM user: Download still works normally.
3. Push:
       git add .
       git commit -m "security: stream files server-side, gate reader shortcuts"
       git push
