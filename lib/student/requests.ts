"use server";

import { prisma } from "@/lib/prisma";
import { getStudent } from "@/lib/student/auth";
import { courseRequestSchema, type CourseRequestInput } from "@/lib/admin/content-schemas";

export type RequestResult = { success: boolean; message?: string; fieldErrors?: Record<string, string> };

/**
 * Submits a course/university access request. Requires a signed-in student.
 * The admin picks these up under Access Requests and reaches out.
 */
export async function submitCourseRequest(input: CourseRequestInput): Promise<RequestResult> {
  const student = await getStudent();
  if (!student) return { success: false, message: "Please sign in to submit a request." };

  const parsed = courseRequestSchema.safeParse(input);
  if (!parsed.success) {
    const e: Record<string, string> = {};
    for (const i of parsed.error.issues) {
      const k = i.path[0];
      if (typeof k === "string" && !e[k]) e[k] = i.message;
    }
    return { success: false, message: "Please check the fields.", fieldErrors: e };
  }

  try {
    await prisma.courseAccessRequest.create({
      data: {
        studentId: student.id,
        name: student.name,
        email: student.email,
        university: parsed.data.university,
        course: parsed.data.course,
        message: parsed.data.message || null,
      },
    });
    // Keep the student's university handy for next time.
    if (!student.university) {
      await prisma.student.update({ where: { id: student.id }, data: { university: parsed.data.university } });
    }
    return { success: true };
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
