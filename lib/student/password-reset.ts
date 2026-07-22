"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/email";
import { checkFormAllowed, clientIp } from "@/lib/security/rate-limit";
import { emailShell, emailButton, siteUrl, makeToken } from "@/lib/email-templates";

export type ResetResult = { success: boolean; message?: string };

// 15 minutes. Short on purpose: a reset link is a bearer credential — anyone
// holding it can take the account. A link left in a shared inbox, a borrowed
// phone, or a browser someone forgot to sign out of stops being dangerous
// quickly. Users who miss the window can simply request another.
const TOKEN_TTL_MINUTES = 15;

/**
 * Sends a password-reset link.
 *
 * Security note: we ALWAYS report success, even if the email isn't registered.
 * Otherwise this endpoint becomes a way for an attacker to discover which email
 * addresses have accounts.
 */
export async function requestPasswordReset(email: string): Promise<ResetResult> {
  // Limit reset requests per IP — stops someone spamming a student's inbox
  // (and burning your email quota).
  const ip = await clientIp();
  const gate = await checkFormAllowed("password-reset", ip, 3);
  if (!gate.allowed) {
    return { success: false, message: gate.message ?? "Please wait a few minutes and try again." };
  }

  const normalized = email.trim().toLowerCase();
  const generic = {
    success: true,
    message: "If that email has an account, we've sent a reset link. Please check your inbox.",
  };

  if (!normalized || !normalized.includes("@")) {
    return { success: false, message: "Please enter a valid email." };
  }

  const student = await prisma.student.findUnique({ where: { email: normalized } });
  if (!student) return generic; // don't reveal whether the account exists

  // How many times have they asked in this cycle? Counted BEFORE the old tokens
  // are cleared, so the number carries across a resend and the admin can see a
  // burst of requests on one account.
  const priorRequests = await prisma.passwordResetToken.count({
    where: { studentId: student.id, usedAt: null },
  });

  // Invalidate any outstanding tokens, then issue a fresh one. This is what
  // makes a resend safe: the previous link stops working the moment a new one is
  // sent, so a link sitting in someone else's inbox or on a borrowed device is
  // already dead.
  await prisma.passwordResetToken.deleteMany({ where: { studentId: student.id, usedAt: null } });

  const token = makeToken();
  await prisma.passwordResetToken.create({
    data: {
      studentId: student.id,
      token,
      expiresAt: new Date(Date.now() + TOKEN_TTL_MINUTES * 60 * 1000),
      requestCount: priorRequests + 1,
    },
  });

  const link = `${siteUrl()}/account/reset-password?token=${token}`;
  await sendNotificationEmail({
    template: "password-reset",
    subject: "Reset your Hello Clinica password",
    recipients: [student.email],
    html: emailShell({
      heading: "Reset your password",
      bodyHtml: `
        <p>Hi ${student.name.split(" ")[0]},</p>
        <p>We received a request to reset your Hello Clinica password. Click the button below to choose a new one. This link expires in ${TOKEN_TTL_MINUTES} minutes.</p>
        ${emailButton(link, "Reset my password")}
        <p style="margin-top:20px;font-size:13px;color:#64748b;">If you didn't ask for this, you can safely ignore this email — your password won't change.</p>
      `,
      footerHtml: "This is an automated message from Hello Clinica.",
    }),
    relatedType: "Student",
    relatedId: student.id,
  });

  return generic;
}

/** Checks a token is real, unused, and unexpired. */
export async function validateResetToken(token: string): Promise<boolean> {
  if (!token) return false;
  const row = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!row || row.usedAt) return false;
  return row.expiresAt.getTime() > Date.now();
}

/** Consumes the token and sets the new password. */
export async function resetPassword(token: string, newPassword: string): Promise<ResetResult> {
  if (newPassword.length < 8) {
    return { success: false, message: "Use at least 8 characters." };
  }

  const row = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!row || row.usedAt || row.expiresAt.getTime() < Date.now()) {
    return { success: false, message: "This reset link is invalid or has expired. Please request a new one." };
  }

  const passwordHash = await bcrypt.hash(newPassword, 10);
  await prisma.$transaction([
    prisma.student.update({ where: { id: row.studentId }, data: { passwordHash } }),
    prisma.passwordResetToken.update({ where: { id: row.id }, data: { usedAt: new Date() } }),
  ]);

  return { success: true, message: "Your password has been updated. You can now sign in." };
}
