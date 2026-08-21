/**
 * One-time, idempotent edit to prisma/schema.prisma: adds a nullable
 * `discipline String?` field to the Book model. Safe to run more than once.
 * After running this, create the migration with:
 *   npx prisma migrate dev --name add_book_discipline
 */
import * as fs from "fs";
import * as path from "path";

const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma");
let schema = fs.readFileSync(schemaPath, "utf8");

const block = schema.match(/model Book \{[\s\S]*?\n\}/);
if (!block) {
  console.error("Could not find `model Book { ... }` in prisma/schema.prisma. No change made.");
  process.exit(1);
}
if (/\bdiscipline\b/.test(block[0])) {
  console.log("Book.discipline already present — schema unchanged.");
  process.exit(0);
}

const updated = block[0].replace(
  /model Book \{/,
  "model Book {\n  discipline   String?   // Medical-school discipline slug (see lib/data/book-disciplines.ts)"
);
schema = schema.replace(block[0], updated);
fs.writeFileSync(schemaPath, schema, "utf8");
console.log("Added `discipline String?` to the Book model.");
console.log("Next: npx prisma migrate dev --name add_book_discipline");
