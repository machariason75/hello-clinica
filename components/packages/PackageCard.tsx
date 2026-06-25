import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PackageView = {
  id: string;
  packageName: string;
  description: string;
  totalHours: number;
  totalCost: number;
  features: string[];
  buttonText: string;
};

/**
 * Package card — name, hours, cost, features, CTA (per Client Requirements +
 * Package System). The cost prefix is a placeholder symbol; the displayed
 * currency is configurable when admin pricing controls arrive.
 */
export function PackageCard({
  pkg,
  onProceed,
}: {
  pkg: PackageView;
  onProceed: (pkg: PackageView) => void;
}) {
  return (
    <div className="surface-card flex h-full flex-col p-7">
      <h3 className="text-h3 text-deep-blue">{pkg.packageName}</h3>
      <p className="text-body mt-2 text-muted-foreground">{pkg.description}</p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-deep-blue">${pkg.totalCost.toLocaleString()}</span>
        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {pkg.totalHours} {pkg.totalHours === 1 ? "hour" : "hours"}
        </span>
      </div>

      {pkg.features.length > 0 && (
        <ul className="mt-6 flex-1 space-y-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-deep-blue">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button type="button" onClick={() => onProceed(pkg)} size="lg" className="mt-7 w-full">
        {pkg.buttonText || "Proceed"}
      </Button>
    </div>
  );
}
