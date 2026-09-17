/**
 * Two small in-place edits:
 *  A) NewsletterForm "Subscribe" button uses the secondary tone (no red) everywhere.
 *  B) app/books/page.tsx passes each book's discipline to the catalog (so the
 *     Medical School Books tab can group into folders).
 * Run from project root:  node scripts/round-inplace.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn) {
  if (!existsSync(path)) { console.log("MISSING  " + path); return; }
  const b = readFileSync(path, "utf8"); const a = fn(b);
  if (a === b) { console.log("no change " + path); return; }
  writeFileSync(path, a, "utf8"); console.log("updated   " + path);
}

edit("components/forms/NewsletterForm.tsx", (s) =>
  s.replace('variant={inverted ? "secondary" : "primary"}', 'variant="secondary"')
);

edit("app/books/page.tsx", (s) =>
  s.replace(
    '      categorySlug: cat?.slug ?? "recommended-books",\n      categoryLabel: cat?.title ?? "Books",\n    };',
    '      categorySlug: cat?.slug ?? "recommended-books",\n      categoryLabel: cat?.title ?? "Books",\n      discipline: (b as { discipline: string | null }).discipline ?? null,\n    };'
  )
);
