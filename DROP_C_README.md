# Drop C — In-browser reader (read mode) + Read/Download control

Clicking a book or resource now opens it in a clean full-screen READER on the
site, instead of forcing a download. Downloading stays premium-only.

## What you get
- Reader at /read/book/<id> and /read/resource/<id>:
  - Full-screen reading mode using the browser's PDF engine, so you get page
    navigation, zoom, fit-to-width, and in-document search (Ctrl/Cmd+F) built in.
  - A "My notes" side panel: signed-in students can jot and save notes as they
    read (saved to their account, private to them). Signed-out visitors can read
    but are prompted to sign in to save notes.
  - The site header/footer are hidden here for a distraction-free page.
- Every "Download" button across Resources and Books is now a pair:
  "Read online" (opens the reader) + "Download" (premium-gated as in Drop B —
  non-premium users are sent to their account with an upgrade note).
- Non-PDF files show an "Open document" fallback.

Note on highlighting: persistent in-PDF highlighting needs a heavier PDF engine
(pdf.js) and can be added later; for now the notes panel is the annotation tool,
and search/zoom/page-nav come from the native viewer.

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
2. Add the notes table:
       npx prisma db push
3. Test:  npm run dev
   - Open a Resource or Book detail -> click "Read online" -> it opens in the
     reader; try page nav, Ctrl+F search, and (signed in) saving a note.
   - Click "Download" as a non-premium student -> account upgrade note.
     As premium -> the file downloads.
4. Push:
       git add .
       git commit -m "Drop C: in-browser reader + read/download control"
       git push

Heads-up: this pack does NOT include package.json (no new dependencies), so it
won't disturb your installed packages. It also (re)adds
components/common/DownloadButton.tsx — the new version does Read + Download.
