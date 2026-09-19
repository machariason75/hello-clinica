import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { getStudent } from "@/lib/student/auth";
import { getBookmarks } from "@/lib/queries/bookmarks";
import { BookmarksList } from "@/components/account/BookmarksList";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "Bookmarks", path: "/account/bookmarks" });

export default async function BookmarksPage() {
  const student = await getStudent();
  if (!student) redirect("/account/login");
  const items = await getBookmarks(student.id);
  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="Bookmarks" description="Everything you've saved to read again." />
      <Section ariaLabel="Bookmarks">
        <div className="mx-auto max-w-3xl">
          <Link href="/account" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to account
          </Link>
          <BookmarksList items={items} />
        </div>
      </Section>
    </PageTransition>
  );
}
