import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { RegisterForm } from "@/components/account/RegisterForm";
import { getStudent } from "@/lib/student/auth";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Create account", path: "/account/register" });

export default async function RegisterPage() {
  if (await getStudent()) redirect("/account");
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Create your account" description="Register to save your progress and request access to premium practice and course revision." />
      <Section ariaLabel="Register">
        <div className="surface-card mx-auto max-w-md p-8">
          <RegisterForm />
        </div>
      </Section>
    </PageTransition>
  );
}
