"use server";

import { prisma } from "@/lib/prisma";
import { newsletterSchema } from "@/lib/validations";
import { sendNotificationEmail, esc } from "@/lib/email";
import { checkFormAllowed, clientIp } from "@/lib/security/rate-limit";

export type ActionResult = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

/**
 * Subscribe to the newsletter.
 * Order (frozen): validate -> store subscriber -> send welcome email.
 * Subscriber persistence is the source of truth; email is best-effort + logged.
 */
export async function subscribeToNewsletter(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  // Anti-spam: cap sign-ups per IP.
  const ip = await clientIp();
  const rl = await checkFormAllowed("newsletter", ip, 5);
  if (!rl.allowed) {
    return { success: false, message: rl.message ?? "Please wait a few minutes and try again." };
  }

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  const parsed = newsletterSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { success: false, message: "Please check the highlighted fields.", fieldErrors };
  }

  const email = parsed.data.email.toLowerCase();

  try {
    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });
    if (existing) {
      // Idempotent: treat repeat sign-up as success without duplicating.
      return {
        success: true,
        message: "You are already subscribed. Thank you for staying with Hello Clinica.",
      };
    }

    await prisma.newsletterSubscriber.create({
      data: { name: parsed.data.name, email, consent: true },
    });
  } catch {
    return {
      success: false,
      message: "We could not save your subscription right now. Please try again shortly.",
    };
  }

  // Email second — never blocks or reverses the stored subscription.
  await sendNotificationEmail({
    template: "newsletter_welcome",
    subject: "Welcome to Hello Clinica",
    recipients: [email],
    relatedType: "NewsletterSubscriber",
    html: `<p>Hi ${esc(parsed.data.name)},</p><p>Thank you for subscribing to Hello Clinica. You'll receive educational updates, guides, and advising tips. You can unsubscribe at any time.</p>`,
  });

  return {
    success: true,
    message: "You're subscribed. Thank you for joining Hello Clinica.",
  };
}
