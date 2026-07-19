import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";

/**
 * Saves where a student has reached in a track.
 *
 *   POST /api/audio-progress   { trackId, positionSeconds, completed? }
 *
 * Uses upsert against the unique (studentId, trackId) constraint, so a student
 * can only ever have ONE progress row per track no matter how many times the
 * player reports in. That is what keeps the listening analytics honest —
 * duplicate rows are impossible at the database level rather than something the
 * application has to police.
 *
 * Signed-out visitors get a quiet 200: they can still listen, their position
 * just isn't remembered. Failing loudly here would interrupt playback for no
 * benefit.
 */
export async function POST(req: Request) {
  const student = await getStudent();
  if (!student) return NextResponse.json({ saved: false });

  let body: { trackId?: string; positionSeconds?: number; completed?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const { trackId } = body;
  const position = Math.max(0, Math.floor(body.positionSeconds ?? 0));
  const completed = !!body.completed;

  if (!trackId) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  try {
    await prisma.audioProgress.upsert({
      where: { studentId_trackId: { studentId: student.id, trackId } },
      create: {
        studentId: student.id,
        trackId,
        positionSeconds: position,
        completed,
        listenCount: 1,
      },
      update: {
        positionSeconds: position,
        // Only ever flip completion ON — re-listening shouldn't erase the fact
        // that they finished it once.
        ...(completed ? { completed: true } : {}),
      },
    });
    return NextResponse.json({ saved: true });
  } catch {
    // Never let a failed bookmark break playback.
    return NextResponse.json({ saved: false });
  }
}
