/**
 * Database seed — idempotent.
 *
 * Seeds:
 *   1) The bootstrap Super Admin, from ADMIN_EMAIL + ADMIN_PASSWORD_HASH +
 *      ADMIN_NAME. The hash is a bcrypt hash (never a plaintext password) —
 *      generate it with `npm run hash:password` (see README).
 *   2) The single SiteSettings row.
 *
 * Run with: npm run db:seed   (or automatically via `prisma migrate`/`db seed`).
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const name = process.env.ADMIN_NAME?.trim() ?? "Hello Clinica Admin";

  if (!email || !passwordHash) {
    console.warn(
      "[seed] ADMIN_EMAIL or ADMIN_PASSWORD_HASH not set — skipping admin seed. " +
        "Set them in .env and re-run `npm run db:seed` to create the first admin."
    );
  } else {
    const admin = await prisma.admin.upsert({
      where: { email },
      update: { name, passwordHash, role: "SUPER_ADMIN" },
      create: { email, name, passwordHash, role: "SUPER_ADMIN" },
    });
    console.log(`[seed] Admin ready: ${admin.email}`);
  }

  const existingSettings = await prisma.siteSettings.findFirst();
  if (!existingSettings) {
    await prisma.siteSettings.create({ data: {} });
    console.log("[seed] SiteSettings row created.");
  } else {
    console.log("[seed] SiteSettings already present.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("[seed] Failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
