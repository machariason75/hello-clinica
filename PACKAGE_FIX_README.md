# Fix — package.json dropped @vercel/speed-insights

## My mistake
I built the previous package.json from MY working copy, which was older than your
real one and did not contain @vercel/speed-insights. `npm install` then removed
it, which is why app/layout.tsx could no longer find the module.

## The fix
This package.json is YOUR uploaded file with exactly TWO lines changed:
    uploadthing:        ^6.13.3  ->  ^7
    @uploadthing/react: ^6.8.0   ->  ^7
Everything else — including @vercel/speed-insights ^2.0.0, all 15 scripts, and
all devDependencies — is byte-for-byte yours. Verified by diff.

## Install
1. Extract the CONTENTS -> Replace all (1 file: package.json).
2. Reinstall so the missing package comes back:
       npm install
   If npm complains about peer dependencies:
       npm install --legacy-peer-deps
3. Verify:
       npx tsc --noEmit      <- expect NO errors
       npm run dev
   Test an upload: /admin -> Resources -> New resource -> Choose File.
4. Push:
       git add .
       git commit -m "fix: upgrade UploadThing v6 to v7 (new token auth)"
       git push
5. Redeploy on Vercel so UPLOADTHING_TOKEN is picked up.
