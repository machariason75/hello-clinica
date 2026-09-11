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

function safeNext(v: unknown): string {
  return typeof v === "string" && v.startsWith("/") && !v.startsWith("//") ? v : "/account";
}

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const next = safeNext((await searchParams).next);
  if (await getStudent()) redirect(next);
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Create your account" description="Register to save your progress and request access to premium practice and course revision." />
      <Section ariaLabel="Register">
        <div className="surface-card mx-auto max-w-md p-8">
          <RegisterForm redirectTo={next} />
        </div>
      </Section>
    </PageTransition>
  );
}
