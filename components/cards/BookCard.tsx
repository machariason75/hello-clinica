import Link from "next/link";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { bookCoverGradient } from "@/lib/book-cover";

export type BookCardData = {
  title: string;
  author: string;
  category: string;
  href: string;
};

/** Book card — each cover gets its own muted jewel tone (see lib/book-cover). */
export function BookCard({ data, className }: { data: BookCardData; className?: string }) {
  return (
    <Link
      href={data.href}
      className={cn("surface-card-interactive focus-ring group flex h-full flex-col overflow-hidden", className)}
    >
      <div
        className="flex aspect-[3/4] items-center justify-center p-6 text-center"
        style={{ backgroundImage: bookCoverGradient(data.title) }}
      >
        <div className="flex flex-col items-center gap-3 text-white">
          <BookOpen className="h-9 w-9 opacity-90" aria-hidden="true" />
          <span className="line-clamp-3 text-base font-semibold leading-snug">{data.title}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-medical-blue">
          {data.category}
        </span>
        <h3 className="mt-1 line-clamp-2 text-base font-semibold text-deep-blue">{data.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{data.author}</p>
      </div>
    </Link>
  );
}
