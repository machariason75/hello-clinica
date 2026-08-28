import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  GraduationCap,
  FileText,
  BookOpen,
  BarChart3,
  PenLine,
  ScrollText,
  ShieldCheck,
  BadgeCheck,
  CalendarClock,
} from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { LucideIcon } from "lucide-react";
import type { PackageView } from "./PackageCard";

/**
 * Advanced Academic Support catalog. Reuses the admin-managed `packages` table:
 * each package becomes a support service, its `features` become the activities
 * we help with, `totalCost` its price, and `totalHours` optional hours of
 * dedicated support. Admins add / edit / reorder everything in the existing
 * Packages screen, and new services appear here automatically.
 */

const DEGREE_LEVELS = ["Master's", "PhD", "Postdoctoral"];

const ASSURANCES: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Confidential" },
  { icon: GraduationCap, label: "Subject-matter experts" },
  { icon: BadgeCheck, label: "Original, plagiarism-free work" },
  { icon: CalendarClock, label: "On-time delivery" },
];

/** Pick an icon from the service name so each card feels tailored. */
function iconFor(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (/(thesis|dissertation|defen[cs]e)/.test(n)) return GraduationCap;
  if (/(journal|paper|manuscript|publication|article)/.test(n)) return FileText;
  if (/(literature|review|proposal)/.test(n)) return BookOpen;
  if (/(statistic|data|analysis|analytics)/.test(n)) return BarChart3;
  if (/(edit|proofread|format|language)/.test(n)) return PenLine;
  if (/(grant|fellowship|postdoc|funding)/.test(n)) return ScrollText;
  return GraduationCap;
}

export function AcademicSupport({ packages }: { packages: PackageView[] }) {
  return (
    <div>
      {/* Who this is for + trust cues */}
      <div className="mb-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Supporting</span>
          {DEGREE_LEVELS.map((level) => (
            <span
              key={level}
              className="rounded-full bg-medical-blue/10 px-3 py-1 text-sm font-semibold text-medical-blue ring-1 ring-medical-blue/15"
            >
              {level}
            </span>
          ))}
          <span className="text-sm font-medium text-muted-foreground">researchers</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {ASSURANCES.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 text-sm text-deep-blue/75">
              <Icon className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {packages.map((pkg, idx) => {
          const featured = idx === 1 || pkg.packageName.toLowerCase().includes("premium");
          const Icon = iconFor(pkg.packageName);
          return (
            <StaggerItem key={pkg.id} className="h-full">
              <article
                className={
                  "surface-card relative flex h-full flex-col p-7 " +
                  (featured ? "ring-2 ring-coral" : "")
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-coral to-[#E8613F] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Most requested
                  </span>
                )}

                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-medical-blue/10 text-medical-blue ring-1 ring-medical-blue/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="text-xl font-semibold text-deep-blue">{pkg.packageName}</h3>
                <p className="text-body mt-2 text-muted-foreground">{pkg.description}</p>

                {pkg.features.length > 0 && (
                  <>
                    <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-medical-blue">
                      What we support
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-deep-blue/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Price footer pinned to the bottom for a tidy grid */}
                <div className="mt-6 flex flex-1 flex-col justify-end">
                  <div className="flex items-end justify-between gap-3 border-t border-border/60 pt-5">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">from</span>
                        <span className="text-3xl font-bold text-deep-blue">
                          ${pkg.totalCost.toLocaleString()}
                        </span>
                      </div>
                      {pkg.totalHours > 0 && (
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {pkg.totalHours} hour{pkg.totalHours === 1 ? "" : "s"} of dedicated support
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/request-consultation?package=${encodeURIComponent(pkg.packageName)}`}
                      className={
                        "focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition " +
                        (featured
                          ? "bg-gradient-to-r from-coral to-[#E8613F] text-white hover:opacity-90"
                          : "border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/5")
                      }
                    >
                      {pkg.buttonText || "Request support"}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
