# File Uploads (UploadThing) — Setup

This pack adds real "upload from your computer" for book covers, book files,
resource thumbnails, and resource files in the admin area. Uploads are locked to
signed-in admins. Uploaded URLs save into the existing database columns — no
schema change, no migration.

## What changed
**New files**
- `lib/uploadthing/core.ts` — upload endpoints (admin-only), file rules & size limits
- `lib/uploadthing/client.ts` — typed client helpers
- `app/api/uploadthing/route.ts` — the upload API route
- `components/admin/ui/UploadField.tsx` — reusable upload control (preview, remove, URL fallback)

**Edited files**
- `components/admin/content/BooksManager.tsx` — cover + file now upload
- `components/admin/content/ResourcesManager.tsx` — thumbnail + file now upload
- `app/admin/layout.tsx` — loads UploadThing styles
- `package.json` — adds the two UploadThing packages
- `.env.example` — UploadThing keys marked active

## Install steps

1. **Extract this pack over your project**, keeping the folder structure
   (it merges into your existing `hello-clinica/` — say "yes/replace" when asked).

2. **Add your keys to `.env`** (the real file, not `.env.example`):
   ```
   UPLOADTHING_SECRET="sk_live_...your secret..."
   UPLOADTHING_APP_ID="...your app id..."
   ```

3. **Install the new packages** (from the project folder):
   ```
   npm install
   ```
   If npm complains about peer dependencies, use:
   ```
   npm install --legacy-peer-deps
   ```

4. **Run the app:**
   ```
   npm run dev
   ```

5. **Test it:** sign in at `/admin/login`, open **Books → New book**, and use
   the **Upload** control on "Cover image" and "Book file". You should see a
   progress indicator, then a preview with a **Remove** option. Save, then check
   the book on the public site. Repeat for **Resources**.

## Notes
- Each upload is rejected unless you are signed in as an admin.
- Limits: images 4 MB, files (PDF/e-book/doc) 32 MB — adjust in `lib/uploadthing/core.ts`.
- The "or paste a URL instead" link is still there, so any links you already
  saved keep working.
- `utfs.io` / `*.ufs.sh` are already allowed in `next.config.mjs`, so uploaded
  images render correctly.
