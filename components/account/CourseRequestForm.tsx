"use client";

import { useState, useTransition } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitCourseRequest } from "@/lib/student/requests";
import { courseRequestSchema, type CourseRequestInput } from "@/lib/admin/content-schemas";

export function CourseRequestForm({ defaultUniversity = "" }: { defaultUniversity?: string }) {
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState<CourseRequestInput>({ university: defaultUniversity, course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit() {
    const parsed = courseRequestSchema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setErrors(e); return;
    }
    setErrors({});
    startTransition(async () => {
      const res = await submitCourseRequest(parsed.data);
      if (res.success) setDone(true);
      else if (res.fieldErrors) setErrors(res.fieldErrors);
    });
  }

  if (done) {
    return (
      <div className="surface-card flex items-start gap-3 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 text-emerald-500" />
        <div>
          <h3 className="font-semibold text-deep-blue">Request received</h3>
          <p className="text-body mt-1 text-muted-foreground">
            Thanks! Our team will reach out shortly with course and revision access. Keep an eye on your email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card space-y-4 p-6">
      <div>
        <Label>College / University</Label>
        <Input value={form.university} onChange={(e) => setForm((f) => ({ ...f, university: e.target.value }))} />
        {errors.university && <p className="mt-1 text-xs text-red-500">{errors.university}</p>}
      </div>
      <div>
        <Label>Course / Program</Label>
        <Input placeholder="e.g. BSN Year 2, Pharmacology" value={form.course} onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))} />
        {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course}</p>}
      </div>
      <div>
        <Label>Anything else? (optional)</Label>
        <Textarea rows={3} placeholder="Tell us what you need help with." value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
      </div>
      <Button onClick={submit} disabled={isPending}>{isPending ? "Sending…" : "Request access"}</Button>
    </div>
  );
}
