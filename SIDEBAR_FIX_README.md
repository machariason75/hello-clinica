# Admin sidebar fix

Restores the admin left sidebar that disappeared after the upload feature was
added. The cause was a separately-imported UploadThing stylesheet conflicting
with Tailwind's rule ordering. This fix removes that import and instead loads
UploadThing's styles through Tailwind's official plugin, so the sidebar shows
again AND the upload buttons stay styled.

## Two files changed
- `app/admin/layout.tsx`   — removed the conflicting CSS import
- `tailwind.config.ts`     — added the UploadThing Tailwind plugin (withUt)

## Install
1. Extract this over your hello-clinica folder, keeping structure (Replace when asked).
2. Stop the dev server (Ctrl+C in the terminal), then start it again:
       npm run dev
   (A restart is required because tailwind.config.ts changed.)
3. Open the admin on a maximized window — the full left sidebar
   (Dashboard, Analytics, Books, Resources, Packages, Settings, Audit logs,
   Log out) should be back.
