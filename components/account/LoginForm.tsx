"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginStudent } from "@/lib/student/auth";
import { studentLoginSchema, type StudentLoginInput } from "@/lib/admin/content-schemas";

const empty: StudentLoginInput = { email: "", password: "" };

export function LoginForm({ redirectTo = "/account" }: { redirectTo?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState<StudentLoginInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit() {
    const parsed = studentLoginSchema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setErrors(e); return;
    }
    setErrors({});
    startTransition(async () => {
      const res = await loginStudent(parsed.data);
      if (res.success) { toast.success("Signed in."); router.push(redirectTo); router.refresh(); }
      else { toast.error(res.message || "Could not sign in."); if (res.fieldErrors) setErrors(res.fieldErrors); }
    });
  }

  // A real <form> with name + autocomplete attributes is what lets Chrome,
  // Safari, and password managers recognise this as a sign-in, offer to save the
  // password, and autofill it on return visits.
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => { e.preventDefault(); submit(); }}
    >
      <div>
        <Label htmlFor="login-email">Email</Label>
        <Input
          id="login-email"
          name="email"
          type="email"
          autoComplete="username"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="login-password">Password</Label>
        <Input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
        />
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>
      <div className="text-right">
        <Link href="/account/forgot-password" className="text-sm font-medium text-medical-blue hover:underline">
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>{isPending ? "Signing in…" : "Sign in"}</Button>
      <p className="text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link href="/account/register" className="font-medium text-medical-blue hover:underline">Create an account</Link>
      </p>
    </form>
  );
}
