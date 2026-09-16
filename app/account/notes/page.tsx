import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, StickyNote, BookOpen, FileText } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { PageTransition } from "@/components/motion/PageTransition";
import { getStudent } from "@/lib/student/auth";
import { getMyNotesGrouped } from "@/lib/queries/my-notes";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = buildMetadata({ title: "My notes", path: "/account/notes" });

export default async function MyNotesPage() {
  const student = await getStudent();
  if (!student) redirect("/account/login");
  const groups = await getMyNotesGrouped(student.id);

  return (
    <PageTransition>
      <PageHero eyebrow="Student account" title="My notes" description="Every note you've taken while reading, grouped by the book or resource." />
      <Section ariaLabel="My notes">
        <div className="mx-auto max-w-3xl">
          <Link href="/account" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-medical-blue hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to account
          </Link>

          {groups.length === 0 ? (
            <div className="surface-card flex flex-col items-center gap-3 p-10 text-center">
              <StickyNote className="h-8 w-8 text-medical-blue/50" aria-hidden="true" />
              <p className="font-semibold text-deep-blue">No notes yet</p>
              <p className="text-body max-w-md text-muted-foreground">
                Open any book or resource and use the Notes panel while you read — your notes will collect here, next to the material they belong to.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {groups.map((g) => (
                <article key={`${g.itemType}:${g.itemId}`} className="surface-card p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1E8DC] text-medical-blue">
                        {g.itemType === "book" ? <BookOpen className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      </span>
                      <div>
                        <h2 className="font-semibold text-deep-blue">{g.itemTitle}</h2>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">{g.itemType}</p>
                      </div>
                    </div>
                    <Link href={`/read/${g.itemType}/${g.itemId}`} className="focus-ring shrink-0 rounded-lg text-sm font-semibold text-medical-blue hover:underline">
                      Open
                    </Link>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {g.notes.map((n) => (
                      <li key={n.id} className="rounded-xl bg-brand-bg/60 p-4">
                        <p className="text-body whitespace-pre-wrap text-deep-blue/90">{n.content}</p>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {n.page ? `Page ${n.page} · ` : ""}
                          {new Date(n.createdAt).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>
    </PageTransition>
  );
}
