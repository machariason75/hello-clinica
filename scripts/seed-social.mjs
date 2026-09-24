/**
 * Seeds SiteSettings.socialLinks with the current live links, so the admin
 * Settings screen shows them and the footer keeps them. Run once:
 *   node scripts/seed-social.mjs
 */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const socialLinks = {
  instagram: "https://www.instagram.com/helloclinica?utm_source=qr&stkn=bGxsZmZidHJpZHpi",
  facebook: "https://www.facebook.com/share/1HT5J6R3yP/",
  tiktok: "https://www.tiktok.com/@helloclinica?_r=1&_t=ZS-99nxuFFFowR",
  youtube: "",
};
const existing = await prisma.siteSettings.findFirst();
if (existing) await prisma.siteSettings.update({ where: { id: existing.id }, data: { socialLinks } });
else await prisma.siteSettings.create({ data: { socialLinks } });
console.log("Seeded SiteSettings.socialLinks.");
await prisma.$disconnect();
