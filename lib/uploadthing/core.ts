import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { getStudent } from "@/lib/student/auth";

const f = createUploadthing();

async function requireAdminUpload() {
  const user = await getAdminUser();
  if (!user) throw new UploadThingError("Unauthorized — admin sign-in required.");
  return { userId: user.id };
}

// Either an admin OR a signed-in student may attach files to a conversation.
async function requireChatUpload() {
  const admin = await getAdminUser();
  if (admin) return { userId: admin.id };
  const student = await getStudent();
  if (student) return { userId: student.id };
  throw new UploadThingError("Sign in to attach files.");
}

export const ourFileRouter = {
  bookCover: f({ image: { maxFileSize: "16MB", maxFileCount: 1 } })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  bookFile: f({
    pdf: { maxFileSize: "512MB", maxFileCount: 1 },
    "application/epub+zip": { maxFileSize: "256MB", maxFileCount: 1 },
    blob: { maxFileSize: "512MB", maxFileCount: 1 },
  })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  bookAudio: f({ audio: { maxFileSize: "512MB", maxFileCount: 1 } })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  resourceThumbnail: f({ image: { maxFileSize: "16MB", maxFileCount: 1 } })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  resourceFile: f({
    pdf: { maxFileSize: "256MB", maxFileCount: 1 },
    blob: { maxFileSize: "256MB", maxFileCount: 1 },
  })
    .middleware(requireAdminUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url })),

  // Chat attachment — images, PDFs, and general documents, from admin or student.
  messageAttachment: f({
    image: { maxFileSize: "16MB", maxFileCount: 1 },
    pdf: { maxFileSize: "64MB", maxFileCount: 1 },
    blob: { maxFileSize: "64MB", maxFileCount: 1 },
  })
    .middleware(requireChatUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url, name: file.name })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
