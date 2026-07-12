"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin/auth-helpers";

export type AdminAccountResult = { success: boolean; message?: string };

/** Change the signed-in admin's own name and email. */
export async function updateOwnProfile(name: string, email: string): Promise<AdminAccountResult> {
  const me = await requireAdmin();
  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanName) return { success: false, message: "Name is required." };
  if (!cleanEmail.includes("@")) return { success: false, message: "Enter a valid email." };

  const taken = await prisma.admin.findFirst({
    where: { email: cleanEmail, id: { not: me.id } },
    select: { id: true },
  });
  if (taken) return { success: false, message: "Another admin already uses that email." };

  await prisma.admin.update({
    where: { id: me.id },
    data: { name: cleanName, email: cleanEmail },
  });
  revalidatePath("/admin/account");
  return { success: true, message: "Profile updated. Use your new email next time you sign in." };
}

/** Change the signed-in admin's own password (requires the current one). */
export async function updateOwnPassword(
  currentPassword: string,
  newPassword: string,
): Promise<AdminAccountResult> {
  const me = await requireAdmin();

  if (newPassword.length < 10) {
    return { success: false, message: "Use at least 10 characters for an admin password." };
  }

  const admin = await prisma.admin.findUnique({ where: { id: me.id } });
  if (!admin) return { success: false, message: "Account not found." };

  const ok = await bcrypt.compare(currentPassword, admin.passwordHash);
  if (!ok) return { success: false, message: "Your current password is incorrect." };

  await prisma.admin.update({
    where: { id: me.id },
    data: { passwordHash: await bcrypt.hash(newPassword, 12) },
  });
  return { success: true, message: "Password changed." };
}

/** Add another admin. */
export async function createAdmin(
  name: string,
  email: string,
  password: string,
): Promise<AdminAccountResult> {
  await requireAdmin();
  const cleanEmail = email.trim().toLowerCase();

  if (!name.trim()) return { success: false, message: "Name is required." };
  if (!cleanEmail.includes("@")) return { success: false, message: "Enter a valid email." };
  if (password.length < 10) return { success: false, message: "Use at least 10 characters." };

  const existing = await prisma.admin.findUnique({ where: { email: cleanEmail } });
  if (existing) return { success: false, message: "An admin with that email already exists." };

  await prisma.admin.create({
    data: {
      name: name.trim(),
      email: cleanEmail,
      passwordHash: await bcrypt.hash(password, 12),
    },
  });
  revalidatePath("/admin/account");
  return { success: true, message: "Admin added." };
}

/** Remove an admin (never yourself, never the last one). */
export async function deleteAdmin(adminId: string): Promise<AdminAccountResult> {
  const me = await requireAdmin();
  if (adminId === me.id) {
    return { success: false, message: "You can't remove your own account." };
  }
  const count = await prisma.admin.count();
  if (count <= 1) {
    return { success: false, message: "There must always be at least one admin." };
  }
  await prisma.admin.delete({ where: { id: adminId } });
  revalidatePath("/admin/account");
  return { success: true, message: "Admin removed." };
}
