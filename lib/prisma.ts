import { PrismaClient } from "@prisma/client";

/**
 * Prisma singleton — prevents exhausting the connection pool during dev
 * hot-reload. Import this everywhere instead of constructing PrismaClient.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
