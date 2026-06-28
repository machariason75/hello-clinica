"use client";

import { Quote } from "lucide-react";
import { CurvedCarousel } from "@/components/common/CurvedCarousel";
import type { TestimonialData } from "@/components/cards/TestimonialCard";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel({ data }: { data: TestimonialData[] }) {
  return (
    <CurvedCarousel
      items={data}
      ariaLabel="Student testimonials"
      renderItem={(t, active) => (
        <div
          className={cn(
            "surface-card flex h-full flex-col justify-center p-7 shadow-card sm:p-9",
            active && "ring-1 ring-medical-blue/15"
          )}
        >
          <Quote className="h-8 w-8 text-coral/70" aria-hidden="true" />
          <p className="mt-4 text-lg font-semibold text-deep-blue sm:text-xl">{t.headline}</p>
          <p className="mt-3 text-body text-muted-foreground">{t.story}</p>
          <div className="mt-6">
            <p className="font-semibold text-deep-blue">{t.studentName}</p>
            {t.program && <p className="text-sm font-medium text-coral">{t.program}</p>}
          </div>
        </div>
      )}
    />
  );
}
