import { prisma } from "@/lib/prisma";

const visible = { published: true, archived: false } as const;

export async function getPublishedPackages() {
  return prisma.package.findMany({
    where: visible,
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
}

export async function getPackageById(id: string) {
  const pkg = await prisma.package.findUnique({ where: { id } });
  if (!pkg || !pkg.published || pkg.archived) return null;
  return pkg;
}
