import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoginForm } from "@/components/account/LoginForm";
import { getStudent } from "@/lib/student/auth";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Sign in", path: "/account/login" });

export default async function LoginPage() {
  if (await getStudent()) redirect("/account");
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Welcome back" description="Sign in to continue your practice and manage your access." />
      <Section ariaLabel="Sign in">
        <div className="surface-card mx-auto max-w-md p-8">
          <LoginForm />
        </div>
      </Section>
    </PageTransition>
  );
}
