import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { ForgotPasswordForm } from "@/components/account/ForgotPasswordForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Forgot password", path: "/account/forgot-password" });

export default function ForgotPasswordPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Forgot your password?" />
      <Section ariaLabel="Forgot password">
        <div className="surface-card mx-auto max-w-md p-8">
          <ForgotPasswordForm />
        </div>
      </Section>
    </PageTransition>
  );
}
