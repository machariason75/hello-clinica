/**
 * READ-ONLY. Prints the full contents of the specific book/reader source files
 * needed to fix the reader bug and build discipline categories. Writes
 * ./files-dump-2.txt. Changes nothing.
 */
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const files = [
  "app/api/read-file/route.ts",
  "app/api/read-audio/route.ts",
  "app/books/page.tsx",
  "app/books/[category]/page.tsx",
  "app/books/[category]/[book]/page.tsx",
  "app/listen/[bookId]/page.tsx",
  "components/books/BooksCatalog.tsx",
  "components/cards/BookCard.tsx",
  "components/sections/BooksSection.tsx",
  "components/sections/BooksFeatureBanner.tsx",
  "components/admin/ui/UploadField.tsx",
  "lib/data/book-categories.ts",
  "lib/queries/books.ts",
  "lib/admin/content-schemas.ts",
  "lib/actions/admin-content.ts",
];

const out: string[] = [];
for (const rel of files) {
  const full = path.join(ROOT, rel);
  out.push("");
  out.push("=".repeat(78));
  out.push("FILE: " + rel);
  out.push("=".repeat(78));
  try {
    const t = fs.readFileSync(full, "utf8");
    t.split(/\r?\n/).forEach((l, i) => out.push(String(i + 1).padStart(4) + "  " + l));
  } catch (e: any) {
    out.push("(could not read: " + e.message + ")");
  }
}
const outPath = path.join(ROOT, "files-dump-2.txt");
fs.writeFileSync(outPath, out.join("\n"), "utf8");
console.log("Wrote " + outPath + ". Please upload files-dump-2.txt.");
