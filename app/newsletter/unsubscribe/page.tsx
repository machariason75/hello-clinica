import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Unsubscribe", path: "/newsletter/unsubscribe" });

/**
 * One-click unsubscribe. Deliberately requires no login — anti-spam rules (and
 * common decency) mean the link in an email must work immediately.
 */
export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  let ok = false;
  let email = "";

  if (token) {
    const sub = await prisma.newsletterSubscriber.findUnique({ where: { unsubToken: token } });
    if (sub) {
      await prisma.newsletterSubscriber.update({
        where: { id: sub.id },
        data: { unsubscribed: true },
      });
      ok = true;
      email = sub.email;
    }
  }

  return (
    <PageTransition>
      <PageHero eyebrow="Newsletter" title={ok ? "You've been unsubscribed" : "Unsubscribe"} />
      <Section ariaLabel="Unsubscribe">
        <div className="surface-card mx-auto max-w-md p-8 text-center">
          {ok ? (
            <>
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
              <p className="text-body mt-4 text-muted-foreground">
                {email} has been removed from the Hello Clinica newsletter. You won't receive further updates.
              </p>
              <p className="text-body mt-2 text-muted-foreground">
                Changed your mind? You can subscribe again from the homepage anytime.
              </p>
            </>
          ) : (
            <>
              <AlertCircle className="mx-auto h-10 w-10 text-coral" />
              <p className="text-body mt-4 text-muted-foreground">
                This unsubscribe link isn't valid or has already been used. If you're still receiving
                emails, please contact us and we'll remove you right away.
              </p>
            </>
          )}
          <Link href="/" className="focus-ring mt-6 inline-flex rounded-lg text-sm font-semibold text-medical-blue hover:underline">
            Back to Hello Clinica
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
}
