import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

/**
 * Best-effort client IP from standard proxy headers (Vercel sets
 * x-forwarded-for). Returns null when unavailable rather than throwing.
 */
export async function getClientIp(): Promise<string | null> {
  try {
    const h = await headers();
    const fwd = h.get("x-forwarded-for");
    if (fwd) return fwd.split(",")[0]?.trim() || null;
    return h.get("x-real-ip");
  } catch {
    return null;
  }
}

/**
 * Write an audit-log entry. Every admin mutation should call this.
 * Never throws — audit failure must not break the underlying action.
 */
export async function recordAudit(args: {
  adminId: string;
  action: string; // e.g. "LOGIN", "ARCHIVE", "UPDATE_STATUS"
  entity: string; // e.g. "Consultation", "Book", "Session"
  entityId?: string | null;
  ipAddress?: string | null;
}): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        adminId: args.adminId,
        action: args.action,
        entity: args.entity,
        entityId: args.entityId ?? null,
        ipAddress: args.ipAddress ?? (await getClientIp()),
      },
    });
  } catch {
    /* non-critical: do not surface audit failures */
  }
}
