"use client";

import { useState, useTransition, type FormEvent } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { newsletterSchema } from "@/lib/validations";
import { subscribeToNewsletter } from "@/lib/actions/newsletter";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "consent", string>>;

/**
 * Newsletter form. Validates on the client (instant feedback) and again on the
 * server (source of truth). "footer" variant renders on the dark gradient.
 */
export function NewsletterForm({ variant = "standalone" }: { variant?: "standalone" | "footer" }) {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const inverted = variant === "footer";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const candidate = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      consent: formData.get("consent") === "on",
    };

    const parsed = newsletterSchema.safeParse(candidate);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Errors]) {
          next[key as keyof Errors] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});

    startTransition(async () => {
      const result = await subscribeToNewsletter(null, formData);
      if (result.success) {
        setDone(true);
        toast.success(result.message);
        formEl.reset();
      } else {
        setErrors(result.fieldErrors ?? {});
        toast.error(result.message);
      }
    });
  }

  if (done) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl px-4 py-4",
          inverted ? "bg-white/15 text-white" : "surface-card text-deep-blue"
        )}
        role="status"
      >
        <CheckCircle2 className={cn("h-5 w-5", inverted ? "text-white" : "text-success")} />
        <p className="font-medium">You're subscribed. Thank you for joining Hello Clinica.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="nl-name" className={inverted ? "text-white" : undefined}>
            Name
          </Label>
          <Input
            id="nl-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "nl-name-error" : undefined}
            className={inverted ? "bg-white/95" : undefined}
          />
          {errors.name && (
            <p id="nl-name-error" className={cn("text-sm", inverted ? "text-white" : "text-destructive")}>
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nl-email" className={inverted ? "text-white" : undefined}>
            Email
          </Label>
          <Input
            id="nl-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "nl-email-error" : undefined}
            className={inverted ? "bg-white/95" : undefined}
          />
          {errors.email && (
            <p id="nl-email-error" className={cn("text-sm", inverted ? "text-white" : "text-destructive")}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="nl-consent" name="consent" aria-describedby="nl-consent-desc" className="mt-0.5" />
        <Label
          htmlFor="nl-consent"
          id="nl-consent-desc"
          className={cn("text-sm font-normal leading-snug", inverted ? "text-white/85" : "text-muted-foreground")}
        >
          By subscribing, you agree to receive educational updates and newsletters from Hello
          Clinica. You may unsubscribe at any time.
        </Label>
      </div>
      {errors.consent && (
        <p className={cn("text-sm", inverted ? "text-white" : "text-destructive")}>{errors.consent}</p>
      )}

      <Button
        type="submit"
        variant={inverted ? "secondary" : "primary"}
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending ? (
          <LoadingSpinner label="Submitting…" />
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </>
        )}
      </Button>
    </form>
  );
}
