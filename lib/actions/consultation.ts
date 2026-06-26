"use server";

import { prisma } from "@/lib/prisma";
import { consultationSchema } from "@/lib/validations";
import { sendNotificationEmail, esc } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";
import type { ActionResult } from "./newsletter";

/**
 * Submit a consultation request.
 * Order (frozen): validate -> store request -> email both inboxes.
 * The stored request is the source of truth; email is logged + best-effort.
 */
export async function submitConsultation(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    cadre: String(formData.get("cadre") ?? ""),
    contactMethod: String(formData.get("contactMethod") ?? ""),
    socialHandle: String(formData.get("socialHandle") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { success: false, message: "Please check the highlighted fields.", fieldErrors };
  }

  const d = parsed.data;
  let recordId: string;
  try {
    const record = await prisma.consultation.create({
      data: {
        firstName: d.firstName,
        lastName: d.lastName,
        phone: d.phone,
        email: d.email.toLowerCase(),
        cadre: d.cadre,
        contactMethod: d.contactMethod,
        socialHandle: d.socialHandle?.trim() || null,
        message: d.message?.trim() || null,
        consent: true,
      },
    });
    recordId = record.id;
  } catch {
    return {
      success: false,
      message: "We couldn't submit your request right now. Please try again shortly.",
    };
  }

  const submittedAt = new Date().toLocaleString("en-US");
  const result = await sendNotificationEmail({
    template: "consultation",
    subject: "New Consultation Request",
    recipients: [siteConfig.email.primary, siteConfig.email.secondary],
    relatedType: "Consultation",
    relatedId: recordId,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${esc(d.firstName)} ${esc(d.lastName)}</p>
      <p><strong>Phone:</strong> ${esc(d.phone)}</p>
      <p><strong>Email:</strong> ${esc(d.email)}</p>
      <p><strong>Cadre:</strong> ${esc(d.cadre)}</p>
      <p><strong>Preferred contact:</strong> ${esc(d.contactMethod)}</p>
      <p><strong>Handle/number:</strong> ${esc(d.socialHandle || "—")}</p>
      <p><strong>Message:</strong> ${esc(d.message || "—")}</p>
      <p><strong>Submitted:</strong> ${esc(submittedAt)}</p>
    `,
  });

  try {
    await prisma.consultation.update({
      where: { id: recordId },
      data: { emailStatus: result.status === "SENT" ? "SENT" : result.status === "FAILED" ? "FAILED" : "PENDING" },
    });
  } catch {
    /* non-critical */
  }

  return {
    success: true,
    message: "Thank you for contacting Hello Clinica. A member of our team will reach out shortly.",
  };
}
