import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ResourceCardData = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

/** Resource card — glassmorphism-leaning, soft gradient icon chip (frozen style). */
export function ResourceCard({ data, className }: { data: ResourceCardData; className?: string }) {
  const Icon = data.icon;
  return (
    <Link
      href={data.href}
      className={cn(
        "surface-card-interactive focus-ring group flex h-full flex-col p-6",
        className
      )}
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-semibold text-deep-blue">{data.title}</h3>
      <p className="text-body mt-2 flex-1 text-muted-foreground">{data.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
