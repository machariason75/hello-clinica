import { NextResponse } from "next/server";
import { getStudent } from "@/lib/student/auth";

/** Lightweight session status for client UI (e.g. the premium banner). */
export async function GET() {
  const student = await getStudent();
  return NextResponse.json({
    signedIn: !!student,
    hasAccess: !!student?.hasAccess,
    name: student?.name ?? null,
  });
}
