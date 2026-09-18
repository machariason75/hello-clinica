import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { getStudent } from "@/lib/student/auth";
import { getNotifications } from "@/lib/queries/notifications";
import { NotificationsList } from "@/components/account/NotificationsList";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Notifications", path: "/account/notifications" });

export default async function NotificationsPage() {
  const student = await getStudent();
  if (!student) redirect("/account/login");
  const items = await getNotifications(student.id);

  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Notifications" description="Updates about your access, activity, and messages from the team." />
      <Section ariaLabel="Notifications">
        <div className="mx-auto max-w-3xl">
          <Link href="/account" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to account
          </Link>
          <NotificationsList items={items} />
        </div>
      </Section>
    </PageTransition>
  );
}
