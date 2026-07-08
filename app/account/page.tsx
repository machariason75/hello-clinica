import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Lock, ArrowRight, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { LogoutButton } from "@/components/account/LogoutButton";
import { getStudent } from "@/lib/student/auth";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "My account", path: "/account" });

export default async function AccountPage() {
  const student = await getStudent();
  if (!student) redirect("/account/login");

  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title={`Hi, ${student.name.split(" ")[0]}`} description="Manage your access and continue practising." />
      <Section ariaLabel="Account">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Signed in as</p>
                <p className="font-medium text-deep-blue">{student.email}</p>
              </div>
              <LogoutButton />
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="flex items-start gap-3">
              {student.hasAccess ? (
                <CheckCircle2 className="mt-0.5 h-6 w-6 text-emerald-500" />
              ) : (
                <Lock className="mt-0.5 h-6 w-6 text-coral" />
              )}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-deep-blue">
                  {student.hasAccess ? "Premium access is active" : "Premium access not active yet"}
                </h2>
                <p className="text-body mt-1 text-muted-foreground">
                  {student.hasAccess
                    ? "You can open every premium section of the Question Bank. Happy studying!"
                    : "Free practice is open to everyone. To unlock premium sections and course revision, request access below and our team will reach out."}
                </p>
                {!student.hasAccess && (
                  <Link href="/question-bank/colleges-universities" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue hover:underline">
                    Request access <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-6 w-6 text-medical-blue" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-deep-blue">Course-specific revision</h2>
                <p className="text-body mt-1 text-muted-foreground">
                  Studying a specific course at your college or university? Request tailored revision and we'll set you up.
                </p>
                <Link href="/question-bank/colleges-universities" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue hover:underline">
                  Request course access <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
