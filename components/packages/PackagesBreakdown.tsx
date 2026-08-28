import Link from "next/link";
import { ArrowRight, Check, Clock, Crown } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { PackageView } from "./PackageCard";

/**
 * Consultation Packages, presented as a short editorial OVERVIEW of the paid
 * offerings rather than a bare price grid: each package gets a brief
 * explanation, its investment (cost), the advising hours it includes, and — so
 * the numbers feel meaningful — an at-a-glance "per advising hour" figure.
 * Everything shown comes from the `packages` table, so the admin edits each
 * package's text, price, hours, and features in the Packages screen and this
 * updates automatically. New packages the admin adds appear here too.
 */
export function PackagesBreakdown({ packages }: { packages: PackageView[] }) {
  return (
    <StaggerGroup className="space-y-6">
      {packages.map((pkg, idx) => {
        const featured = idx === 1 || pkg.packageName.toLowerCase().includes("premium");
        const perHour = pkg.totalHours > 0 ? Math.round(pkg.totalCost / pkg.totalHours) : null;
        return (
          <StaggerItem key={pkg.id}>
            <article
              className={"surface-card relative p-7 sm:p-8 " + (featured ? "ring-2 ring-coral" : "")}
            >
              {featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-coral to-[#E8613F] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Most popular
                </span>
              )}

              <div className="grid gap-7 md:grid-cols-[1fr_248px] md:items-start">
                {/* Brief explanation + what's included */}
                <div>
                  <div className="flex items-center gap-2">
                    <Crown
                      className={"h-5 w-5 " + (featured ? "text-coral" : "text-medical-blue")}
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold text-deep-blue">{pkg.packageName}</h3>
                  </div>
                  <p className="text-body mt-3 text-muted-foreground">{pkg.description}</p>

                  {pkg.features.length > 0 && (
                    <>
                      <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-medical-blue">
                        What&apos;s included
                      </h4>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-deep-blue/85">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Investment + advising hours — the numbers, framed for relevance */}
                <div className="rounded-2xl bg-brand-bg/60 p-6 text-center ring-1 ring-border/60">
                  <div className="text-4xl font-bold text-deep-blue">
                    ${pkg.totalCost.toLocaleString()}
                  </div>
                  <div className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {pkg.totalHours > 0
                      ? `${pkg.totalHours} advising hour${pkg.totalHours === 1 ? "" : "s"} included`
                      : "Self-paced access"}
                  </div>
                  {perHour !== null && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      about ${perHour.toLocaleString()} per advising hour
                    </p>
                  )}
                  <Link
                    href={`/request-consultation?package=${encodeURIComponent(pkg.packageName)}`}
                    className={
                      "focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition " +
                      (featured
                        ? "bg-gradient-to-r from-coral to-[#E8613F] text-white hover:opacity-90"
                        : "border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/5")
                    }
                  >
                    {pkg.buttonText || "Get started"}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
