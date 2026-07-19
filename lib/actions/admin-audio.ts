"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { recordAudit } from "@/lib/admin/audit";
import { audioTrackSchema, type AudioTrackFormInput } from "@/lib/admin/content-schemas";

/**
 * Audiobook track management.
 *
 * Kept in its own file rather than appended to admin-content.ts — that file has
 * twice caused build failures from duplicate declarations when features were
 * bolted on. New feature, new file.
 */

export type AudioActionResult = {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

function collect(issues: { path: (string | number)[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const k = i.path[0];
    if (typeof k === "string" && !out[k]) out[k] = i.message;
  }
  return out;
}

function refresh(bookId: string) {
  revalidatePath("/admin/books");
  revalidatePath("/books");
  revalidatePath(`/listen/${bookId}`);
}

export async function createAudioTrack(
  bookId: string,
  input: AudioTrackFormInput
): Promise<AudioActionResult> {
  const admin = await getAdminUser();
  if (!admin) return { success: false, message: "Not authorized." };

  const parsed = audioTrackSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collect(parsed.error.issues) };
  }
  const d = parsed.data;

  try {
    const created = await prisma.audioTrack.create({
      data: {
        bookId,
        title: d.title,
        source: d.source,
        audioUrl: d.source === "upload" ? d.audioUrl || null : null,
        externalUrl: d.source === "external" ? d.externalUrl || null : null,
        narrator: d.narrator || null,
        durationSeconds: d.durationSeconds || null,
        order: d.order,
        published: d.published,
      },
    });
    await recordAudit({ adminId: admin.id, action: "CREATE", entity: "AudioTrack", entityId: created.id });
    refresh(bookId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not add the track." };
  }
}

export async function updateAudioTrack(
  trackId: string,
  input: AudioTrackFormInput
): Promise<AudioActionResult> {
  const admin = await getAdminUser();
  if (!admin) return { success: false, message: "Not authorized." };

  const parsed = audioTrackSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the fields.", fieldErrors: collect(parsed.error.issues) };
  }
  const d = parsed.data;

  try {
    const updated = await prisma.audioTrack.update({
      where: { id: trackId },
      data: {
        title: d.title,
        source: d.source,
        audioUrl: d.source === "upload" ? d.audioUrl || null : null,
        externalUrl: d.source === "external" ? d.externalUrl || null : null,
        narrator: d.narrator || null,
        durationSeconds: d.durationSeconds || null,
        order: d.order,
        published: d.published,
      },
      select: { bookId: true },
    });
    await recordAudit({ adminId: admin.id, action: "UPDATE", entity: "AudioTrack", entityId: trackId });
    refresh(updated.bookId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not update the track." };
  }
}

export async function deleteAudioTrack(trackId: string): Promise<AudioActionResult> {
  const admin = await getAdminUser();
  if (!admin) return { success: false, message: "Not authorized." };
  try {
    const removed = await prisma.audioTrack.delete({
      where: { id: trackId },
      select: { bookId: true },
    });
    await recordAudit({ adminId: admin.id, action: "DELETE", entity: "AudioTrack", entityId: trackId });
    refresh(removed.bookId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete the track." };
  }
}

export async function setAudioTrackPublished(
  trackId: string,
  published: boolean
): Promise<AudioActionResult> {
  const admin = await getAdminUser();
  if (!admin) return { success: false, message: "Not authorized." };
  try {
    const updated = await prisma.audioTrack.update({
      where: { id: trackId },
      data: { published },
      select: { bookId: true },
    });
    await recordAudit({
      adminId: admin.id,
      action: published ? "PUBLISH" : "UNPUBLISH",
      entity: "AudioTrack",
      entityId: trackId,
    });
    refresh(updated.bookId);
    return { success: true };
  } catch {
    return { success: false, message: "Could not update." };
  }
}
