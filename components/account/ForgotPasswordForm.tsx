"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { requestPasswordReset } from "@/lib/student/password-reset";

/**
 * Forgot-password request.
 *
 * The resend control appears ONLY after a link has been sent — offering it up
 * front would be confusing, and it exists to solve one real problem: the email
 * went to spam, or the 15-minute window lapsed while they were away from their
 * inbox.
 *
 * A 60-second cooldown sits on it. That isn't security theatre — the server also
 * caps reset requests per IP — it's there so an anxious user tapping repeatedly
 * doesn't fire off five emails and then have four dead links to puzzle over.
 * Each new link invalidates the previous one, so only the newest ever works.
 */
const RESEND_COOLDOWN_SECONDS = 60;

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [cooldown, setCooldown] = useState(0);
  const [resentCount, setResentCount] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  function send(isResend = false) {
    setError("");
    startTransition(async () => {
      const res = await requestPasswordReset(email);
      if (res.success) {
        setDone(true);
        setCooldown(RESEND_COOLDOWN_SECONDS);
        if (isResend) setResentCount((n) => n + 1);
      } else {
        setError(res.message || "Something went wrong.");
      }
    });
  }

  if (done) {
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
        <p className="text-body mt-4 text-muted-foreground">
          If that email has an account, we&apos;ve sent a reset link. Please check your inbox (and your spam folder).
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          The link works for <strong className="text-deep-blue">15 minutes</strong>. After that you&apos;ll need a new
          one.
        </p>

        {/* Resend — only offered once a link has actually been sent. */}
        <div className="mt-6">
          <Button variant="secondary" onClick={() => send(true)} disabled={isPending || cooldown > 0}>
            <RotateCw className="mr-1.5 h-4 w-4" aria-hidden="true" />
            {cooldown > 0 ? `Resend in ${cooldown}s` : isPending ? "Sending…" : "Resend the link"}
          </Button>
          {resentCount > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              Sent again. Only the newest link works — any earlier one has stopped working.
            </p>
          )}
          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        </div>

        <Link
          href="/account/login"
          className="mt-6 inline-flex text-sm font-semibold text-medical-blue hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-body text-muted-foreground">
        Enter the email you signed up with and we&apos;ll send you a link to set a new password. The link is valid for
        15 minutes.
      </p>
      <div>
        <Label>Email</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <Button className="w-full" onClick={() => send(false)} disabled={isPending || !email.trim()}>
        {isPending ? "Sending…" : "Send reset link"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link href="/account/login" className="font-medium text-medical-blue hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
