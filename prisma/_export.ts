import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
const prisma = new PrismaClient();
async function main() {
  const data = await prisma.quizCategory.findMany({
    include: {
      parent: { select: { slug: true, title: true } },
      quizzes: { include: { questions: { include: { choices: true } } } },
    },
  });
  const out = path.resolve("bank-architecture.json");
  fs.writeFileSync(out, JSON.stringify(data));
  console.log("\nDONE. Upload this file to me:\n" + out + "\n");
}
main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
