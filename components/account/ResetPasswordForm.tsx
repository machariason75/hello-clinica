"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { resetPassword } from "@/lib/student/password-reset";

export function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  function submit() {
    setError("");
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }
    startTransition(async () => {
      const res = await resetPassword(token, password);
      if (res.success) {
        toast.success("Password updated. Please sign in.");
        router.push("/account/login");
      } else {
        setError(res.message || "Could not reset your password.");
      }
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <Label>New password</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="mt-1 text-xs text-muted-foreground">At least 8 characters.</p>
      </div>
      <div>
        <Label>Confirm new password</Label>
        <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <Button className="w-full" onClick={submit} disabled={isPending || !password || !confirm}>
        {isPending ? "Updating…" : "Set new password"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        <Link href="/account/login" className="font-medium text-medical-blue hover:underline">Back to sign in</Link>
      </p>
    </div>
  );
}
