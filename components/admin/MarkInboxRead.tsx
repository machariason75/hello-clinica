"use client";
import { useEffect } from "react";
import { markAllAdminRead } from "@/lib/actions/admin-alerts";

/** When the admin opens the Messages inbox, mark all unread conversations read
 *  so the login pop-ups don't reappear afterwards. */
export function MarkInboxRead() {
  useEffect(() => { markAllAdminRead().catch(() => {}); }, []);
  return null;
}
