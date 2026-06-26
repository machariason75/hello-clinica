import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/lib/uploadthing/core";

/** UploadThing route handler (v6) — serves the upload endpoints. */
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
