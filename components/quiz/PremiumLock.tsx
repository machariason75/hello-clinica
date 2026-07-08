import Link from "next/link";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Shown in place of gated (premium) content. Two states:
 * - signed out → prompt to create an account / sign in
 * - signed in without access → prompt to request access
 */
export function PremiumLock({
  signedIn,
  title = "This is a premium section",
}: {
  signedIn: boolean;
  title?: string;
}) {
  return (
    <div className="surface-card mx-auto max-w-2xl overflow-hidden">
      <div className="bg-[#F3E9DD]/70 px-6 py-8 text-center sm:px-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-coral shadow-sm">
          <Lock className="h-6 w-6" />
        </span>
        <h2 className="text-h3 mt-4 text-deep-blue">{title}</h2>
        <p className="text-body mx-auto mt-2 max-w-md text-muted-foreground">
          {signedIn
            ? "Your account doesn't have premium access yet. Request access and our team will get you set up."
            : "Create a free account or sign in, then request access to unlock premium practice tests and course revision."}
        </p>

        <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left">
          {["Full timed practice tests with rationales", "Topic breakdowns to target weak areas", "Course-specific revision for your school"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-deep-blue/80">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          {signedIn ? (
            <Link
              href="/question-bank/colleges-universities"
              className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-xl bg-coral px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
            >
              Request access <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <>
              <Link
                href="/account/register"
                className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-xl bg-coral px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
              >
                Create free account <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/account/login"
                className="focus-ring inline-flex items-center justify-center rounded-xl border-2 border-medical-blue/30 px-5 py-2.5 font-semibold text-medical-blue transition hover:bg-medical-blue/5"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
