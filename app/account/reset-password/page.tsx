import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { ResetPasswordForm } from "@/components/account/ResetPasswordForm";
import { validateResetToken } from "@/lib/student/password-reset";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Reset password", path: "/account/reset-password" });

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const valid = token ? await validateResetToken(token) : false;

  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Choose a new password" />
      <Section ariaLabel="Reset password">
        <div className="surface-card mx-auto max-w-md p-8">
          {valid && token ? (
            <ResetPasswordForm token={token} />
          ) : (
            <div className="text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-coral" />
              <p className="text-body mt-4 text-muted-foreground">
                This reset link is invalid or has expired. Reset links are valid for one hour.
              </p>
              <Link href="/account/forgot-password" className="mt-6 inline-flex text-sm font-semibold text-medical-blue hover:underline">
                Request a new link
              </Link>
            </div>
          )}
        </div>
      </Section>
    </PageTransition>
  );
}
