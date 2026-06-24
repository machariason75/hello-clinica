import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceCardData = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ServiceCard({ data, className }: { data: ServiceCardData; className?: string }) {
  const Icon = data.icon;
  return (
    <Link
      href={data.href}
      className={cn("surface-card-interactive focus-ring group flex h-full flex-col p-7", className)}
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-h3 text-deep-blue">{data.title}</h3>
      <p className="text-body mt-3 flex-1 text-muted-foreground">{data.description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
