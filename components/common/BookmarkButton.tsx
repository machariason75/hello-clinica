"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";
import { isBookmarked, toggleBookmark } from "@/lib/actions/bookmarks";

/** Bookmark toggle. Saving is a PREMIUM feature: a signed-out user is sent to
 *  sign in; a signed-in user without granted access is sent to request access. */
export function BookmarkButton({
  itemType,
  itemId,
  signedIn,
  canSave,
}: {
  itemType: "book" | "resource";
  itemId: string;
  signedIn: boolean;
  canSave: boolean; // = granted premium (hasAccess)
}) {
  const [saved, setSaved] = useState(false);
  const [, start] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (!canSave) return;
    let cancelled = false;
    isBookmarked(itemType, itemId).then((v) => {
      if (!cancelled) setSaved(v);
    });
    return () => {
      cancelled = true;
    };
  }, [itemType, itemId, canSave]);

  function onClick() {
    if (!signedIn) {
      toast.info("Create a free account to save bookmarks.");
      router.push(`/account/login?next=/read/${itemType}/${itemId}`);
      return;
    }
    if (!canSave) {
      toast.info("Bookmarks unlock with premium access.");
      router.push("/account");
      return;
    }
    const next = !saved;
    setSaved(next);
    start(async () => {
      const res = await toggleBookmark(itemType, itemId);
      if (!res.success) {
        setSaved(!next);
        if ("needsPremium" in res && res.needsPremium) router.push("/account");
        else toast.error("Couldn't update bookmark.");
      } else {
        toast.success(res.bookmarked ? "Bookmarked." : "Bookmark removed.");
      }
    });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring inline-flex items-center gap-1.5 rounded-xl border-2 border-medical-blue/30 px-3 py-1.5 text-sm font-semibold text-medical-blue transition hover:bg-medical-blue/5"
      aria-pressed={saved}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
    >
      {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
      {saved ? "Saved" : "Bookmark"}
    </button>
  );
}
