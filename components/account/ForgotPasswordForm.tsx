"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { requestPasswordReset } from "@/lib/student/password-reset";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  function submit() {
    setError("");
    startTransition(async () => {
      const res = await requestPasswordReset(email);
      if (res.success) setDone(true);
      else setError(res.message || "Something went wrong.");
    });
  }

  if (done) {
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
        <p className="text-body mt-4 text-muted-foreground">
          If that email has an account, we've sent a reset link. Please check your inbox (and your spam folder).
        </p>
        <Link href="/account/login" className="mt-6 inline-flex text-sm font-semibold text-medical-blue hover:underline">
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-body text-muted-foreground">
        Enter the email you signed up with and we'll send you a link to set a new password.
      </p>
      <div>
        <Label>Email</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <Button className="w-full" onClick={submit} disabled={isPending || !email.trim()}>
        {isPending ? "Sending…" : "Send reset link"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link href="/account/login" className="font-medium text-medical-blue hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
