"use client";

import { useState, useTransition, type FormEvent } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { packageInquirySchema } from "@/lib/validations";
import { submitPackageInquiry } from "@/lib/actions/package-inquiry";

type FieldKey = "studentFirstName" | "studentLastName" | "studentEmail" | "studentPhone" | "message";
type Errors = Partial<Record<FieldKey, string>>;

export function PackageInquiryForm({
  packageId,
  packageName,
}: {
  packageId: string;
  packageName: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("packageId", packageId);

    const candidate = {
      studentFirstName: String(formData.get("studentFirstName") ?? ""),
      studentLastName: String(formData.get("studentLastName") ?? ""),
      studentEmail: String(formData.get("studentEmail") ?? ""),
      studentPhone: String(formData.get("studentPhone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = packageInquirySchema.safeParse(candidate);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as FieldKey]) next[key as FieldKey] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});

    startTransition(async () => {
      const result = await submitPackageInquiry(null, formData);
      if (result.success) {
        setSubmitted(true);
        toast.success("Inquiry sent.");
      } else {
        setErrors(result.fieldErrors ?? {});
        toast.error(result.message);
      }
    });
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center px-2 py-8 text-center" role="status">
        <CheckCircle2 className="h-11 w-11 text-success" />
        <h3 className="text-h3 mt-4 text-deep-blue">Inquiry received</h3>
        <p className="text-body mt-2 max-w-sm text-muted-foreground">
          Thank you for your interest in {packageName}. A member of our team will reach out shortly.
        </p>
      </div>
    );
  }

  const errText = (k: FieldKey) =>
    errors[k] ? (
      <p id={`${k}-error`} className="text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="studentFirstName">First name</Label>
          <Input id="studentFirstName" name="studentFirstName" autoComplete="given-name" aria-invalid={!!errors.studentFirstName} aria-describedby={errors.studentFirstName ? "studentFirstName-error" : undefined} />
          {errText("studentFirstName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="studentLastName">Last name</Label>
          <Input id="studentLastName" name="studentLastName" autoComplete="family-name" aria-invalid={!!errors.studentLastName} aria-describedby={errors.studentLastName ? "studentLastName-error" : undefined} />
          {errText("studentLastName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="studentEmail">Email</Label>
          <Input id="studentEmail" name="studentEmail" type="email" autoComplete="email" aria-invalid={!!errors.studentEmail} aria-describedby={errors.studentEmail ? "studentEmail-error" : undefined} />
          {errText("studentEmail")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="studentPhone">Phone</Label>
          <Input id="studentPhone" name="studentPhone" type="tel" autoComplete="tel" aria-invalid={!!errors.studentPhone} aria-describedby={errors.studentPhone ? "studentPhone-error" : undefined} />
          {errText("studentPhone")}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" name="message" rows={3} placeholder="Anything you'd like us to know?" />
      </div>

      <Button type="submit" disabled={isPending} size="lg" className="w-full">
        {isPending ? (
          <LoadingSpinner label="Submitting…" />
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit inquiry
          </>
        )}
      </Button>
    </form>
  );
}
