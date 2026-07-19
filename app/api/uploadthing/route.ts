import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/lib/uploadthing/core";

/**
 * UploadThing route handler (v7).
 *
 * v6 used `createNextRouteHandler`, which was removed in v7 — every adapter now
 * exports `createRouteHandler` under a unified name. The Next.js adapter still
 * returns named GET/POST exports, so nothing else about this file changes.
 *
 * Authentication now comes from a single UPLOADTHING_TOKEN environment variable
 * (a base64 blob containing app id, region and API key) instead of the old
 * UPLOADTHING_SECRET + UPLOADTHING_APP_ID pair.
 */
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
