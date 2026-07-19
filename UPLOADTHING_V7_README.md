# Fix — file uploads broken (UploadThing v6 -> v7)

## What the error meant
    Request to https://api.uploadthing.com/v6/prepareUpload failed with status 400

A 400 on prepareUpload means UploadThing REJECTED the request before any file was
sent — it is (almost always) a credentials problem, not a code bug. Because it
failed identically on localhost AND on the live site, it isn't a Vercel-only
config mistake: the credentials themselves are no longer being accepted.

Your project runs UploadThing **v6**, which authenticates with the old
UPLOADTHING_SECRET + UPLOADTHING_APP_ID pair. v7 replaced that entirely.

## DO THIS FIRST (2 minutes, before touching code)
Log in at https://uploadthing.com/dashboard and check:
  1. Does your app still exist? (If it was deleted, that alone explains the 400.)
  2. Go to API Keys. Is there still a "V6" tab, or only "V7"?
  3. Are you over the free-tier storage/usage limit?

If a V6 key is still offered and your app is healthy, copy a FRESH V6 key into
both .env and Vercel and retest — that may fix it without upgrading.
If only V7 is offered, the upgrade below is the required path.

## What changed in v7 (why the upgrade is the real fix)
- Presigned URLs are now generated on YOUR server instead of UploadThing's.
  Your server therefore needs the app id and region, so they merged everything
  into ONE env var: UPLOADTHING_TOKEN (base64 JSON = app id + region + API key).
- `createNextRouteHandler` was removed; every adapter now exports
  `createRouteHandler`.
- The Next.js adapter still returns named GET/POST exports, so the route file
  keeps the same shape.

## Files in this pack (3)
- app/api/uploadthing/route.ts  -> createNextRouteHandler => createRouteHandler
- package.json                  -> uploadthing ^7, @uploadthing/react ^7
- .env.example                  -> documents UPLOADTHING_TOKEN

GOOD NEWS: your client code needed NO changes. lib/uploadthing/client.ts already
uses generateUploadButton / generateUploadDropzone / generateReactHelpers from
the main entrypoint — exactly what v7 expects. (v7 removed the old
`generateComponents` and the `@uploadthing/react/hooks` entrypoint; you use
neither.)

## Install — IN ORDER
1. Extract the CONTENTS into your project (NO nested hello-clinica folder)
   -> Replace all (3 files).

2. Get your V7 token:
   UploadThing dashboard -> API Keys -> the "V7" tab -> copy the token.

3. Update your LOCAL .env — DELETE these two lines:
       UPLOADTHING_SECRET="..."
       UPLOADTHING_APP_ID="..."
   and ADD this one:
       UPLOADTHING_TOKEN="paste_the_v7_token"

4. Update VERCEL -> Settings -> Environment Variables:
       DELETE  UPLOADTHING_SECRET
       DELETE  UPLOADTHING_APP_ID
       ADD     UPLOADTHING_TOKEN = (the v7 token)

5. Install the new packages:
       npm install
   If npm complains about peer dependencies:
       npm install --legacy-peer-deps

6. Verify:
       npx tsc --noEmit          <- expect no errors
       npm run dev
   Then sign in to /admin -> Resources -> New resource -> try "Choose File".
   It should upload and show a preview.

7. Push:
       git add .
       git commit -m "fix: upgrade UploadThing v6 -> v7 (new token auth)"
       git push

8. REDEPLOY on Vercel so the new env var is picked up
   (Deployments -> ... -> Redeploy), then test the upload on the LIVE site too.

## Two things to watch for (I could not install packages to verify these)
1. `withUt` in tailwind.config.ts — imported from "uploadthing/tw". It exists in
   v7, but if `npm run dev` fails with an error about "uploadthing/tw", tell me
   and I'll swap in the manual Tailwind content path instead.
2. `file.url` in lib/uploadthing/core.ts — valid in v7. (A LATER major renamed it
   to `file.ufsUrl`, which is why this pack pins to ^7 rather than @latest —
   pinning keeps the change small and reviewable.)

If either misbehaves, paste me the error and it's a quick follow-up.

## Meanwhile: uploads are NOT blocking you
Every upload field has an "or paste a URL instead" link. You can host a file
anywhere (Google Drive share link, Dropbox, etc.) and paste the URL — books and
resources will work exactly the same. Use that if you need to publish today.
