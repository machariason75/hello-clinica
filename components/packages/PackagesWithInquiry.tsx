"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PackageCard, type PackageView } from "./PackageCard";
import { PackageInquiryForm } from "@/components/forms/PackageInquiryForm";

/** Client island: package grid + inquiry modal (File 17 §C.2 inquiry-as-modal). */
export function PackagesWithInquiry({ packages }: { packages: PackageView[] }) {
  const [selected, setSelected] = useState<PackageView | null>(null);

  return (
    <>
      <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <StaggerItem key={pkg.id} className="h-full">
            <PackageCard pkg={pkg} onProceed={setSelected} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="top-[8vh] max-w-lg translate-y-0">
          <DialogTitle className="text-h3 text-deep-blue">
            {selected ? `Inquire about ${selected.packageName}` : "Package inquiry"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share your details and our team will follow up to help you get started.
          </DialogDescription>
          {selected && (
            <div className="mt-4">
              <PackageInquiryForm packageId={selected.id} packageName={selected.packageName} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
