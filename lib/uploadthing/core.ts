import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getAdminUser } from "@/lib/admin/auth-helpers";

/**
 * UploadThing file router (v6).
 *
 * Every endpoint is locked to an authenticated admin via the same session
 * helper the admin pages use — uploads cannot be performed by the public.
 * onUploadComplete returns the hosted file URL, which the client stores into
 * the existing coverImage / fileUrl / thumbnail / resourceFile columns
 * (all already validated as URLs), so no schema change is needed.
 */
const f = createUploadthing();

// Shared guard: throws (rejecting the upload) when there is no admin session.
async function requireAdminUpload() {
  const user = await getAdminUser();
  if (!user) throw new UploadThingError("Unauthorized — admin sign-in required.");
  return { userId: user.id };
}

export const ourFileRouter = {
  // Book cover image
  bookCover: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  // Downloadable book file (PDF / e-book / document)
  bookFile: f({
    pdf: { maxFileSize: "32MB", maxFileCount: 1 },
    "application/epub+zip": { maxFileSize: "32MB", maxFileCount: 1 },
    blob: { maxFileSize: "32MB", maxFileCount: 1 },
  })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  // Resource thumbnail image
  resourceThumbnail: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  // Downloadable resource file (PDF / document)
  resourceFile: f({
    pdf: { maxFileSize: "32MB", maxFileCount: 1 },
    blob: { maxFileSize: "32MB", maxFileCount: 1 },
  })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
