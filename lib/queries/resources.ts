import { prisma } from "@/lib/prisma";
import type { ResourceCategory } from "@prisma/client";

/** Published, non-archived resources in a category (featured first). */
export async function getResourcesByCategory(category: ResourceCategory) {
  return prisma.resource.findMany({
    where: { category, published: true, archived: false },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
}

/** Featured resources for the hub page. */
export async function getFeaturedResources(limit = 6) {
  return prisma.resource.findMany({
    where: { published: true, archived: false, featured: true },
    take: limit,
    orderBy: { createdAt: "desc" },
  });
}

/** Count of published resources per category (for hub badges). */
export async function getResourceCountsByCategory() {
  const grouped = await prisma.resource.groupBy({
    by: ["category"],
    where: { published: true, archived: false },
    _count: { _all: true },
  });
  const map = new Map<string, number>();
  for (const g of grouped) map.set(g.category, g._count._all);
  return map;
}
