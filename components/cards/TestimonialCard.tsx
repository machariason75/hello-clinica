import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type TestimonialData = {
  studentName: string;
  program: string;
  headline: string;
  story: string;
};

export function TestimonialCard({ data, className }: { data: TestimonialData; className?: string }) {
  return (
    <figure className={cn("surface-card flex h-full flex-col p-7", className)}>
      <Quote className="h-7 w-7 text-accent-blue" aria-hidden="true" />
      <figcaption className="mt-4 text-lg font-semibold text-deep-blue">{data.headline}</figcaption>
      <blockquote className="text-body mt-3 flex-1 text-muted-foreground">{data.story}</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
          {data.studentName
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <p className="font-semibold text-deep-blue">{data.studentName}</p>
          <p className="text-sm text-muted-foreground">{data.program}</p>
        </div>
      </div>
    </figure>
  );
}
