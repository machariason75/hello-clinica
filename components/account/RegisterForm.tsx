"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { registerStudent } from "@/lib/student/auth";
import { studentRegisterSchema, type StudentRegisterInput } from "@/lib/admin/content-schemas";

const empty: StudentRegisterInput = { name: "", email: "", password: "", university: "" };

export function RegisterForm({ redirectTo = "/account" }: { redirectTo?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState<StudentRegisterInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit() {
    const parsed = studentRegisterSchema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = i.path[0]; if (typeof k === "string" && !e[k]) e[k] = i.message; }
      setErrors(e); return;
    }
    setErrors({});
    startTransition(async () => {
      const res = await registerStudent(parsed.data);
      if (res.success) { toast.success("Welcome to Hello Clinica!"); router.push(redirectTo); router.refresh(); }
      else { toast.error(res.message || "Could not create account."); if (res.fieldErrors) setErrors(res.fieldErrors); }
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <Label>Full name</Label>
        <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        {errors.password ? <p className="mt-1 text-xs text-red-500">{errors.password}</p> : <p className="mt-1 text-xs text-muted-foreground">At least 8 characters.</p>}
      </div>
      <div>
        <Label>College / University (optional)</Label>
        <Input value={form.university} onChange={(e) => setForm((f) => ({ ...f, university: e.target.value }))} />
      </div>
      <Button className="w-full" onClick={submit} disabled={isPending}>{isPending ? "Creating…" : "Create account"}</Button>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/account/login" className="font-medium text-medical-blue hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
