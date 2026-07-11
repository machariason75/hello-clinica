import { prisma } from "@/lib/prisma";

/** Published, non-archived packages in display order. */
export async function getPackages() {
  return prisma.package.findMany({
    where: { published: true, archived: false },
    orderBy: [{ sortOrder: "asc" }, { totalCost: "asc" }],
  });
}
