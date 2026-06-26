"use client";

import { useMemo, useState, useTransition, type FormEvent } from "react";
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
  consultationSchema,
  cadreOptions,
  contactMethodOptions,
  methodNeedsHandle,
} from "@/lib/validations";
import { submitConsultation } from "@/lib/actions/consultation";

type FieldKey =
  | "firstName"
  | "lastName"
  | "phone"
  | "email"
  | "cadre"
  | "contactMethod"
  | "socialHandle"
  | "consent";
type Errors = Partial<Record<FieldKey, string>>;

const handleLabels: Record<string, { label: string; placeholder: string }> = {
  WhatsApp: { label: "WhatsApp number", placeholder: "e.g. +254 700 000000" },
  Instagram: { label: "Instagram username", placeholder: "e.g. @yourhandle" },
  Facebook: { label: "Facebook profile name", placeholder: "e.g. Your Name" },
  TikTok: { label: "TikTok username", placeholder: "e.g. @yourhandle" },
};

export function ConsultationForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Controlled values (needed to gate the submit button + dynamic social field)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cadre, setCadre] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const needsHandle = methodNeedsHandle(contactMethod);

  const canSubmit = useMemo(() => {
    const base =
      firstName.trim() &&
      lastName.trim() &&
      phone.trim() &&
      email.trim() &&
      cadre &&
      contactMethod &&
      consent;
    if (!base) return false;
    if (needsHandle && !socialHandle.trim()) return false;
    return true;
  }, [firstName, lastName, phone, email, cadre, contactMethod, consent, needsHandle, socialHandle]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const candidate = {
      firstName,
      lastName,
      phone,
      email,
      cadre,
      contactMethod,
      socialHandle,
      message,
      consent,
    };

    const parsed = consultationSchema.safeParse(candidate);
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

    const formData = new FormData();
    formData.set("firstName", firstName);
    formData.set("lastName", lastName);
    formData.set("phone", phone);
    formData.set("email", email);
    formData.set("cadre", cadre);
    formData.set("contactMethod", contactMethod);
    formData.set("socialHandle", needsHandle ? socialHandle : "");
    formData.set("message", message);
    formData.set("consent", consent ? "on" : "");

    startTransition(async () => {
      const result = await submitConsultation(null, formData);
      if (result.success) {
        setSubmitted(true);
        toast.success("Request sent.");
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
        <h3 className="text-h3 mt-5 text-deep-blue">Request received</h3>
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
          <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" aria-invalid={!!errors.firstName} />
          {errText("firstName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" aria-invalid={!!errors.lastName} />
          {errText("lastName")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" aria-invalid={!!errors.phone} />
          {errText("phone")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" aria-invalid={!!errors.email} />
          {errText("email")}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cadre">Current stage</Label>
          <Select value={cadre} onValueChange={setCadre}>
            <SelectTrigger id="cadre" aria-invalid={!!errors.cadre}>
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
          <Label htmlFor="contactMethod">Preferred contact method</Label>
          <Select
            value={contactMethod}
            onValueChange={(v) => {
              setContactMethod(v);
              if (!methodNeedsHandle(v)) setSocialHandle("");
            }}
          >
            <SelectTrigger id="contactMethod" aria-invalid={!!errors.contactMethod}>
              <SelectValue placeholder="Select a method" />
            </SelectTrigger>
            <SelectContent>
              {contactMethodOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errText("contactMethod")}
        </div>
      </div>

      {needsHandle && (
        <div className="space-y-1.5">
          <Label htmlFor="socialHandle">{handleLabels[contactMethod]?.label ?? "Username / number"}</Label>
          <Input
            id="socialHandle"
            value={socialHandle}
            onChange={(e) => setSocialHandle(e.target.value)}
            placeholder={handleLabels[contactMethod]?.placeholder}
            aria-invalid={!!errors.socialHandle}
          />
          {errText("socialHandle")}
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Tell us a little about your goals." />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(v) => setConsent(v === true)}
          className="mt-0.5"
          aria-describedby="consent-desc"
        />
        <Label htmlFor="consent" id="consent-desc" className="text-sm font-normal leading-snug text-muted-foreground">
          I agree to receive notifications and updates from Hello Clinica.
        </Label>
      </div>
      {errText("consent")}

      <Button type="submit" disabled={isPending || !canSubmit} size="lg" className="w-full sm:w-auto">
        {isPending ? (
          <LoadingSpinner label="Submitting…" />
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Request consultation
          </>
        )}
      </Button>
    </form>
  );
}
