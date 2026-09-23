"use client";
import { useState, useTransition } from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";
import { updateWhatsAppNumber } from "@/lib/actions/admin-settings";

export function SettingsForm({ whatsapp }: { whatsapp: string }) {
  const [value, setValue] = useState(whatsapp);
  const [pending, start] = useTransition();
  function save() {
    start(async () => {
      const r = await updateWhatsAppNumber(value.trim());
      if (r.success) toast.success("WhatsApp number saved.");
      else toast.error("Could not save.");
    });
  }
  return (
    <section className="surface-card max-w-lg p-6">
      <h2 className="text-lg font-semibold text-deep-blue">WhatsApp number</h2>
      <p className="text-body mt-1 text-muted-foreground">
        Shown on the contact page's "Chat on WhatsApp" link. Include the country code; symbols are ignored.
      </p>
      <div className="mt-4 flex items-end gap-2">
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="e.g. +1 (717) 813-7793" className="focus-ring flex-1 rounded-lg border border-border px-3 py-2 text-sm" />
        <button type="button" onClick={save} disabled={pending} className="inline-flex items-center gap-1.5 rounded-xl bg-medical-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60">
          <Save className="h-4 w-4" /> {pending ? "Saving…" : "Save"}
        </button>
      </div>
    </section>
  );
}
