/**
 * Medical School Books folders — coordinated fixes (edits files in place):
 *  1) Book schema gains an optional `discipline`.
 *  2) createBook/updateBook persist `discipline`.
 *  3) Admin Books form shows a Discipline (folder) picker for Medical School Books.
 *  4) Admin Books page passes each book's discipline to the form.
 *  5) Discipline folders use the jewel-tone palette (not the red gradient).
 *  6) Book page copy no longer says "download" (we use Read online + Share).
 * Run from project root:  node scripts/books-folders-fixes.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const edits = [];
function edit(path, fn) {
  if (!existsSync(path)) { edits.push([path, "MISSING"]); return; }
  const before = readFileSync(path, "utf8");
  const after = fn(before);
  if (after === before) { edits.push([path, "no change"]); return; }
  writeFileSync(path, after, "utf8");
  edits.push([path, "updated"]);
}
const need = (cond, msg) => { if (!cond) throw new Error(msg); };

// 1) schema
edit("lib/admin/content-schemas.ts", (s) => {
  if (/discipline:/.test(s.split("bookSchema")[1]?.split("BookFormInput")[0] || "")) return s;
  return s.replace(
    "  fileUrl: optionalUrl,\n  featured: z.boolean(),",
    '  fileUrl: optionalUrl,\n  discipline: z.string().trim().optional().default(""),\n  featured: z.boolean(),'
  );
});

// 2) create/update persist discipline
edit("lib/actions/admin-content.ts", (s) =>
  s.split("fileUrl: d.fileUrl || null,").join("fileUrl: d.fileUrl || null,\n        discipline: d.discipline || null,")
);

// 3) BooksManager: type + emptyForm + openEdit + import + Select
edit("components/admin/content/BooksManager.tsx", (s) => {
  let out = s;
  out = out.replace("  fileUrl: string | null;\n  featured: boolean;",
                    "  fileUrl: string | null;\n  discipline: string | null;\n  featured: boolean;");
  out = out.replace('coverImage: "", fileUrl: "", featured: false, published: true,',
                    'coverImage: "", fileUrl: "", discipline: "", featured: false, published: true,');
  out = out.replace('coverImage: r.coverImage ?? "", fileUrl: r.fileUrl ?? "",',
                    'coverImage: r.coverImage ?? "", fileUrl: r.fileUrl ?? "", discipline: r.discipline ?? "",');
  if (!out.includes('from "@/lib/data/book-disciplines"')) {
    out = out.replace('import { UploadField } from "@/components/admin/ui/UploadField";',
                      'import { UploadField } from "@/components/admin/ui/UploadField";\nimport { bookDisciplines } from "@/lib/data/book-disciplines";');
  }
  // insert the Discipline picker right after the Category field (before the first UploadField)
  out = out.replace(
    "              </Select>\n            </Field>\n            <UploadField",
    `              </Select>\n            </Field>\n            {form.category === "MEDICAL_SCHOOL_BOOKS" && (\n              <Field label="Discipline (folder)" error={errors.discipline}>\n                <Select value={form.discipline || ""} onValueChange={(v) => setForm({ ...form, discipline: v })}>\n                  <SelectTrigger><SelectValue placeholder="Choose a discipline" /></SelectTrigger>\n                  <SelectContent>\n                    {bookDisciplines.map((d) => (\n                      <SelectItem key={d.slug} value={d.slug}>{d.title}</SelectItem>\n                    ))}\n                  </SelectContent>\n                </Select>\n              </Field>\n            )}\n            <UploadField`
  );
  return out;
});

// 4) admin books page: pass discipline
edit("app/admin/books/page.tsx", (s) =>
  s.replace("    fileUrl: r.fileUrl,\n    featured: r.featured,",
            "    fileUrl: r.fileUrl,\n    discipline: r.discipline,\n    featured: r.featured,")
);

// 5) shelf folders -> jewel tones
edit("components/books/MedicalSchoolShelf.tsx", (s) => {
  let out = s;
  if (!out.includes('from "@/lib/book-cover"')) {
    out = out.replace('import { cn } from "@/lib/utils";',
                      'import { cn } from "@/lib/utils";\nimport { bookCoverGradient } from "@/lib/book-cover";');
  }
  out = out.split('<div className="flex aspect-[4/3] items-center justify-center bg-brand-gradient p-6 text-center">')
           .join('<div className="flex aspect-[4/3] items-center justify-center p-6 text-center" style={{ backgroundImage: bookCoverGradient(d.title) }}>');
  return out;
});

// 6) book page copy
edit("app/books/[category]/[book]/page.tsx", (s) =>
  s.replace("This title is part of our recommended reading. A download will appear here when available.",
            "This title is part of our recommended reading. It will be available to read here soon.")
);

for (const [p, status] of edits) console.log(`${status.padEnd(9)} ${p}`);
