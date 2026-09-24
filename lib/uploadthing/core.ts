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

  // Chat attachment — images, PDFs, Office docs, and general files, from admin or student.
  // `blob` is the catch-all that accepts ANY file type; the named types set larger,
  // format-appropriate size limits. Together they cover png/jpg/gif/webp, pdf, docx,
  // xlsx, pptx, csv, txt, html, zip, etc.
  messageAttachment: f({
    image: { maxFileSize: "16MB", maxFileCount: 1 },
    pdf: { maxFileSize: "64MB", maxFileCount: 1 },
    text: { maxFileSize: "16MB", maxFileCount: 1 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "64MB", maxFileCount: 1 }, // .docx
    "application/msword": { maxFileSize: "64MB", maxFileCount: 1 }, // .doc
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { maxFileSize: "64MB", maxFileCount: 1 }, // .xlsx
    "application/vnd.ms-excel": { maxFileSize: "64MB", maxFileCount: 1 }, // .xls
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": { maxFileSize: "64MB", maxFileCount: 1 }, // .pptx
    "application/vnd.ms-powerpoint": { maxFileSize: "64MB", maxFileCount: 1 }, // .ppt
    "text/csv": { maxFileSize: "32MB", maxFileCount: 1 },
    "text/html": { maxFileSize: "16MB", maxFileCount: 1 },
    "application/zip": { maxFileSize: "128MB", maxFileCount: 1 },
    blob: { maxFileSize: "128MB", maxFileCount: 1 }, // catch-all for anything else
  })
    .middleware(requireChatUpload)
    .onUploadComplete(async ({ file }) => ({ url: file.url, name: file.name })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
