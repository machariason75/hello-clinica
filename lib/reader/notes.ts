"use server";

import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";

export type NoteResult = { success: boolean; message?: string };

/** Notes for the current student on a given item (newest first). */
export async function getReaderNotes(itemType: string, itemId: string) {
  const student = await getStudent();
  if (!student) return [];
  return prisma.readerNote.findMany({
    where: { studentId: student.id, itemType, itemId },
    orderBy: { createdAt: "desc" },
  });
}

export async function addReaderNote(
  itemType: string,
  itemId: string,
  content: string,
  page?: number | null,
): Promise<NoteResult> {
  const student = await getStudent();
  if (!student) return { success: false, message: "Please sign in to save notes." };
  const text = content.trim();
  if (!text) return { success: false, message: "Note is empty." };
  if (itemType !== "book" && itemType !== "resource") return { success: false, message: "Invalid item." };
  try {
    await prisma.readerNote.create({
      data: { studentId: student.id, itemType, itemId, content: text, page: page ?? null },
    });
    return { success: true };
  } catch {
    return { success: false, message: "Could not save the note." };
  }
}

export async function deleteReaderNote(noteId: string): Promise<NoteResult> {
  const student = await getStudent();
  if (!student) return { success: false, message: "Not signed in." };
  try {
    // Only delete the student's own note.
    await prisma.readerNote.deleteMany({ where: { id: noteId, studentId: student.id } });
    return { success: true };
  } catch {
    return { success: false, message: "Could not delete the note." };
  }
}
