# Read-online fix: files open in the reader instead of downloading

## What was wrong
Every Read button already goes to /read/<type>/<id>. The downloads came from inside the reader:
1. Files on UploadThing have no extension, and storage often labels them
   "application/octet-stream". The reader couldn't work out the format, so it
   tried the PDF viewer. When that failed it showed an "Open document" button
   that linked to the raw file, and the browser downloaded it.
2. PowerPoint, EPUB, old .doc/.ppt and plain-text files had no in-app viewer, so
   they always ended up at that download button.

## What changed
- lib/reader/file-kind.ts (NEW): reads the first bytes of each file and works out
  its real type (PDF, Word, Excel, PowerPoint, EPUB, old Office, image, audio,
  video or text), whatever the storage label says.
- app/api/read-file/route.ts: serves each file with its real type, always
  "inline", so the browser shows it and doesn't save it.
- app/read/[type]/[id]/page.tsx: uses the new detection.
- components/reader/ReaderView.tsx:
  - The "Open document" download link is GONE.
  - PowerPoint and old .doc/.xls/.ppt files show in an embedded online viewer.
  - EPUB books show in an in-app EPUB reader.
  - Text files show as text.
  - If Word or Excel fails to render in-app, it falls back to the online viewer.
  - Audio and video players hide the browser's own download option.
  - If nothing can show a file, the reader displays a message with no link.
- scripts/audit-reader-files.ts (NEW) + "npm run audit:reader": the checker.

## Install
1. Extract over your hello-clinica folder, keeping the folder structure, and choose Replace all.
2. Restart: Ctrl+C, then npm run dev.

## Verify (run these in the VS Code terminal)
1. Before deploying, check the code and the files:
       npm run audit:reader
   It checks (1) that no link anywhere sends the user to the raw file, and
   (2) every book and resource in the database: its real format and which
   viewer will show it. Any problems are listed with the /read link.
   The full table is saved to reader-audit.csv.
2. After pushing to GitHub and Vercel redeploys, check the LIVE site:
       npm run audit:reader -- --live https://YOUR-DOMAIN
   This opens every published item on the live site and fails any that is
   served as a download.
   "✗ problems : 0" means everything opens in the reader.

## Note
The PowerPoint and old Office viewer is Microsoft's embedded viewer. It has to
fetch the file from the live site, so on localhost those files show a message
instead. Check them on the deployed site.
