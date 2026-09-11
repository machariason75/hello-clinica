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

function safeNext(v: unknown): string {
  return typeof v === "string" && v.startsWith("/") && !v.startsWith("//") ? v : "/account";
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const next = safeNext((await searchParams).next);
  if (await getStudent()) redirect(next);
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Welcome back" description="Sign in to continue your practice and manage your access." />
      <Section ariaLabel="Sign in">
        <div className="surface-card mx-auto max-w-md p-8">
          <LoginForm redirectTo={next} />
        </div>
      </Section>
    </PageTransition>
  );
}
