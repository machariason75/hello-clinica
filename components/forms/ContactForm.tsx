"use client";

import { useState, useTransition, type FormEvent } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import {
  contactSchema,
  cadreOptions,
  contactReasonOptions,
} from "@/lib/validations";
import { submitContactRequest } from "@/lib/actions/contact";
import { cn } from "@/lib/utils";

type FieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "cadre"
  | "reason"
  | "message"
  | "acceptedTerms";
type Errors = Partial<Record<FieldKey, string>>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Errors>({});
  const [cadre, setCadre] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.set("cadre", cadre);
    formData.set("reason", reason);

    const candidate = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      cadre,
      reason,
      message: String(formData.get("message") ?? ""),
      acceptedTerms: formData.get("acceptedTerms") === "on",
    };

    const parsed = contactSchema.safeParse(candidate);
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
      const result = await submitContactRequest(null, formData);
      if (result.success) {
        setSubmitted(true);
        toast.success("Message sent.");
      } else {
        setErrors(result.fieldErrors ?? {});
        toast.error(result.message);
      }
    });
  }

  if (submitted) {
    return (
      <div className="surface-card flex flex-col items-center px-6 py-14 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="text-h3 mt-5 text-deep-blue">Message received</h3>
        <p className="text-body mt-3 max-w-md text-muted-foreground">
          Thank you for contacting Hello Clinica. A member of our team will reach out shortly.
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
    <form onSubmit={handleSubmit} noValidate className="surface-card space-y-6 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} />
          {errText("firstName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined} />
          {errText("lastName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errText("email")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errText("phone")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cadre">Current stage</Label>
          <Select value={cadre} onValueChange={setCadre}>
            <SelectTrigger id="cadre" aria-invalid={!!errors.cadre} aria-describedby={errors.cadre ? "cadre-error" : undefined}>
              <SelectValue placeholder="Select your stage" />
            </SelectTrigger>
            <SelectContent>
              {cadreOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errText("cadre")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="reason">Reason for contact</Label>
          <Select value={reason} onValueChange={setReason}>
            <SelectTrigger id="reason" aria-invalid={!!errors.reason} aria-describedby={errors.reason ? "reason-error" : undefined}>
              <SelectValue placeholder="Select a reason" />
            </SelectTrigger>
            <SelectContent>
              {contactReasonOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errText("reason")}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} placeholder="How can we help you?" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errText("message")}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="acceptedTerms" name="acceptedTerms" className="mt-0.5" aria-describedby="acceptedTerms-desc" />
        <Label htmlFor="acceptedTerms" id="acceptedTerms-desc" className="text-sm font-normal leading-snug text-muted-foreground">
          I agree to receive notifications and updates from Hello Clinica, and I accept the{" "}
          <a href="/terms-of-service" className="text-medical-blue underline-offset-2 hover:underline">
            Terms of Service
          </a>
          .
        </Label>
      </div>
      {errText("acceptedTerms")}

      <Button type="submit" disabled={isPending} size="lg" className="w-full sm:w-auto">
        {isPending ? (
          <LoadingSpinner label="Submitting…" />
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
