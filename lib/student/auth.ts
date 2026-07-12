"use server";

import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import {
  STUDENT_COOKIE,
  createSessionToken,
  verifySessionToken,
  studentCookieOptions,
} from "@/lib/student/session";
import { checkLoginAllowed, recordLoginAttempt, clientIp } from "@/lib/security/rate-limit";
import {
  studentRegisterSchema,
  studentLoginSchema,
  type StudentRegisterInput,
  type StudentLoginInput,
} from "@/lib/admin/content-schemas";

export type StudentUser = {
  id: string;
  name: string;
  email: string;
  hasAccess: boolean;
  university: string | null;
};

export type AuthResult = { success: boolean; message?: string; fieldErrors?: Record<string, string> };

/** Current signed-in student (or null). Safe in server components. */
export async function getStudent(): Promise<StudentUser | null> {
  const token = (await cookies()).get(STUDENT_COOKIE)?.value;
  const id = verifySessionToken(token);
  if (!id) return null;
  const s = await prisma.student.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, hasAccess: true, university: true },
  });
  return s;
}

function fieldErrors(issues: { path: (string | number)[]; message: string }[]) {
  const e: Record<string, string> = {};
  for (const i of issues) {
    const k = i.path[0];
    if (typeof k === "string" && !e[k]) e[k] = i.message;
  }
  return e;
}

export async function registerStudent(input: StudentRegisterInput): Promise<AuthResult> {
  const parsed = studentRegisterSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: fieldErrors(parsed.error.issues) };
  const { name, email, password, university } = parsed.data;
  const normEmail = email.toLowerCase().trim();

  const existing = await prisma.student.findUnique({ where: { email: normEmail } });
  if (existing) return { success: false, message: "An account with this email already exists. Please sign in." };

  const passwordHash = await bcrypt.hash(password, 10);
  const student = await prisma.student.create({
    data: { name: name.trim(), email: normEmail, passwordHash, university: university?.trim() || null },
  });

  (await cookies()).set(STUDENT_COOKIE, createSessionToken(student.id), studentCookieOptions);
  return { success: true };
}

export async function loginStudent(input: StudentLoginInput): Promise<AuthResult> {
  const parsed = studentLoginSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the fields.", fieldErrors: fieldErrors(parsed.error.issues) };
  const normEmail = parsed.data.email.toLowerCase().trim();

  // Brute-force protection: refuse further attempts after repeated failures.
  const ip = await clientIp();
  const gate = await checkLoginAllowed(normEmail, ip);
  if (!gate.allowed) return { success: false, message: gate.message ?? "Too many attempts. Please try again later." };

  const student = await prisma.student.findUnique({ where: { email: normEmail } });
  const valid = student ? await bcrypt.compare(parsed.data.password, student.passwordHash) : false;
  if (!student || !valid) {
    await recordLoginAttempt(normEmail, ip, false);
    return { success: false, message: "Invalid email or password." };
  }
  await recordLoginAttempt(normEmail, ip, true);

  (await cookies()).set(STUDENT_COOKIE, createSessionToken(student.id), studentCookieOptions);
  return { success: true };
}

export async function logoutStudent(): Promise<void> {
  (await cookies()).delete(STUDENT_COOKIE);
}
