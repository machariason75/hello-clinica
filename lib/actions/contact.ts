"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { sendNotificationEmail, esc } from "@/lib/email";
import { siteConfig } from "@/lib/site-config";
import type { ActionResult } from "./newsletter";

/**
 * Submit the contact form.
 * Order (frozen): validate -> store request -> email Gmail + Outlook.
 * The DB write is the guarantee that no submission is ever lost; the email is
 * the second step and is logged with delivery status.
 */
export async function submitContactRequest(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const raw = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    cadre: String(formData.get("cadre") ?? ""),
    reason: String(formData.get("reason") ?? ""),
    message: String(formData.get("message") ?? ""),
    acceptedTerms: formData.get("acceptedTerms") === "on" || formData.get("acceptedTerms") === "true",
  };

  const parsed = contactSchema.safeParse(raw);
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
    const record = await prisma.contactRequest.create({
      data: {
        firstName: d.firstName,
        lastName: d.lastName,
        email: d.email.toLowerCase(),
        phone: d.phone,
        cadre: d.cadre,
        reason: d.reason,
        message: d.message,
        acceptedTerms: true,
      },
    });
    recordId = record.id;
  } catch {
    return {
      success: false,
      message: "We couldn't submit your message right now. Please try again shortly.",
    };
  }

  // Email second.
  const submittedAt = new Date().toLocaleString("en-US");
  const result = await sendNotificationEmail({
    template: "contact",
    subject: "New Contact Request",
    recipients: [siteConfig.email.primary, siteConfig.email.secondary],
    relatedType: "ContactRequest",
    relatedId: recordId,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${esc(d.firstName)} ${esc(d.lastName)}</p>
      <p><strong>Email:</strong> ${esc(d.email)}</p>
      <p><strong>Phone:</strong> ${esc(d.phone)}</p>
      <p><strong>Cadre:</strong> ${esc(d.cadre)}</p>
      <p><strong>Reason:</strong> ${esc(d.reason)}</p>
      <p><strong>Message:</strong> ${esc(d.message)}</p>
      <p><strong>Submitted:</strong> ${esc(submittedAt)}</p>
    `,
  });

  // Reflect delivery status on the source record (does not affect success).
  try {
    await prisma.contactRequest.update({
      where: { id: recordId },
      data: { emailStatus: result.status === "SENT" ? "SENT" : result.status === "FAILED" ? "FAILED" : "PENDING" },
    });
  } catch {
    /* status update is non-critical */
  }

  return {
    success: true,
    message: "Thank you for contacting Hello Clinica. A member of our team will reach out shortly.",
  };
}
