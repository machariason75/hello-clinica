"use server";

import { prisma } from "@/lib/prisma";
import { packageInquirySchema } from "@/lib/validations";
import { sendNotificationEmail, esc } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";
import type { ActionResult } from "./newsletter";

/**
 * Submit a package inquiry.
 * Order (frozen): validate -> store inquiry -> notify admin (both inboxes).
 * The stored inquiry is the source of truth; email is logged + best-effort.
 */
export async function submitPackageInquiry(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const packageId = String(formData.get("packageId") ?? "");
  const raw = {
    studentFirstName: String(formData.get("studentFirstName") ?? ""),
    studentLastName: String(formData.get("studentLastName") ?? ""),
    studentEmail: String(formData.get("studentEmail") ?? ""),
    studentPhone: String(formData.get("studentPhone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = packageInquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { success: false, message: "Please check the highlighted fields.", fieldErrors };
  }

  if (!packageId) {
    return { success: false, message: "We couldn't identify the package. Please try again." };
  }

  const pkg = await prisma.package.findUnique({ where: { id: packageId } });
  if (!pkg || !pkg.published || pkg.archived) {
    return { success: false, message: "That package is no longer available." };
  }

  const d = parsed.data;
  let recordId: string;
  try {
    const record = await prisma.packageInquiry.create({
      data: {
        packageId,
        studentFirstName: d.studentFirstName,
        studentLastName: d.studentLastName,
        studentEmail: d.studentEmail.toLowerCase(),
        studentPhone: d.studentPhone,
        message: d.message || null,
      },
    });
    recordId = record.id;
  } catch {
    return {
      success: false,
      message: "We couldn't submit your inquiry right now. Please try again shortly.",
    };
  }

  const result = await sendNotificationEmail({
    template: "package_inquiry",
    subject: "New Package Inquiry",
    recipients: [siteConfig.email.primary, siteConfig.email.secondary],
    relatedType: "PackageInquiry",
    relatedId: recordId,
    html: `
      <h2>New Package Inquiry</h2>
      <p><strong>Package:</strong> ${esc(pkg.packageName)}</p>
      <p><strong>Student:</strong> ${esc(d.studentFirstName)} ${esc(d.studentLastName)}</p>
      <p><strong>Email:</strong> ${esc(d.studentEmail)}</p>
      <p><strong>Phone:</strong> ${esc(d.studentPhone)}</p>
      <p><strong>Message:</strong> ${esc(d.message || "—")}</p>
    `,
  });

  try {
    await prisma.packageInquiry.update({
      where: { id: recordId },
      data: { emailStatus: result.status === "SENT" ? "SENT" : result.status === "FAILED" ? "FAILED" : "PENDING" },
    });
  } catch {
    /* non-critical */
  }

  return {
    success: true,
    message: "Thank you. Your inquiry has been received and our team will reach out shortly.",
  };
}
