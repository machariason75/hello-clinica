"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { settingsSchema, type SettingsFormInput } from "@/lib/admin/settings-schema";
import { updateSettings } from "@/lib/actions/admin-settings";

type Errors = Partial<Record<keyof SettingsFormInput, string>>;

export function SettingsForm({
  settingsId,
  initial,
}: {
  settingsId: string;
  initial: SettingsFormInput;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState<SettingsFormInput>(initial);
  const [errors, setErrors] = useState<Errors>({});

  function set<K extends keyof SettingsFormInput>(key: K, value: SettingsFormInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit() {
    const parsed = settingsSchema.safeParse(form);
    if (!parsed.success) {
      const e: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !e[k as keyof SettingsFormInput]) e[k as keyof SettingsFormInput] = issue.message;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = await updateSettings(settingsId, parsed.data);
      if (res.success) {
        toast.success("Settings saved.");
        router.refresh();
      } else {
        if (res.fieldErrors) setErrors(res.fieldErrors as Errors);
        toast.error(res.message ?? "Could not save.");
      }
    });
  }

  return (
    <div className="max-w-2xl space-y-8">
      <section className="surface-card space-y-4 p-6">
        <h2 className="text-h3 text-deep-blue">General</h2>
        <Field label="Site name" error={errors.siteName}>
          <Input value={form.siteName} onChange={(e) => set("siteName", e.target.value)} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Primary contact email" error={errors.siteEmail1}>
            <Input value={form.siteEmail1} onChange={(e) => set("siteEmail1", e.target.value)} />
          </Field>
          <Field label="Secondary contact email" error={errors.siteEmail2}>
            <Input value={form.siteEmail2} onChange={(e) => set("siteEmail2", e.target.value)} />
          </Field>
        </div>
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-h3 text-deep-blue">Footer</h2>
        <Field label="Footer text" error={errors.footerText}>
          <Textarea rows={2} value={form.footerText} onChange={(e) => set("footerText", e.target.value)} />
        </Field>
        <Field label="Copyright text" error={errors.copyrightText}>
          <Input value={form.copyrightText} onChange={(e) => set("copyrightText", e.target.value)} />
        </Field>
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-h3 text-deep-blue">Social links</h2>
        <p className="text-sm text-muted-foreground">Full URLs (leave blank to hide). Used where social links appear.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Instagram" error={errors.instagram}>
            <Input value={form.instagram} onChange={(e) => set("instagram", e.target.value)} placeholder="https://instagram.com/…" />
          </Field>
          <Field label="Facebook" error={errors.facebook}>
            <Input value={form.facebook} onChange={(e) => set("facebook", e.target.value)} placeholder="https://facebook.com/…" />
          </Field>
          <Field label="TikTok" error={errors.tiktok}>
            <Input value={form.tiktok} onChange={(e) => set("tiktok", e.target.value)} placeholder="https://tiktok.com/@…" />
          </Field>
          <Field label="YouTube" error={errors.youtube}>
            <Input value={form.youtube} onChange={(e) => set("youtube", e.target.value)} placeholder="https://youtube.com/@…" />
          </Field>
        </div>
      </section>

      <div className="flex justify-end">
        <Button onClick={submit} disabled={isPending} size="lg">
          {isPending ? <LoadingSpinner label="Saving…" /> : "Save settings"}
        </Button>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
