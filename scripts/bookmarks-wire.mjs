/** Wires Bookmarks into the reader header + the account overview (idempotent). */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

// Reader: Bookmark button next to Notes
edit("components/reader/ReaderView.tsx", (s) => {
  let o = s;
  if (!o.includes("BookmarkButton")) {
    o = o.replace('import { ShareButton } from "@/components/common/ShareButton";',
                  'import { ShareButton } from "@/components/common/ShareButton";\nimport { BookmarkButton } from "@/components/common/BookmarkButton";');
    o = o.replace(
      '          <StickyNote className="mr-1.5 h-4 w-4" /> Notes{notes.length > 0 ? ` (${notes.length})` : ""}\n        </Button>',
      '          <StickyNote className="mr-1.5 h-4 w-4" /> Notes{notes.length > 0 ? ` (${notes.length})` : ""}\n        </Button>\n        <BookmarkButton itemType={itemType} itemId={itemId} signedIn={signedIn} />'
    );
  }
  return o;
});

// Account overview: a Bookmarks card (only if missing)
edit("app/account/page.tsx", (s) => {
  if (s.includes('href="/account/bookmarks"')) return s; // already there
  const anchorNotes = '          <Link href="/account/notes"';
  if (!s.includes(anchorNotes)) return s;
  // add lucide Bookmark import if not present in the lucide line
  let o = s;
  const lucideLine = o.split("\n").find((l) => l.includes('from "lucide-react"')) || "";
  if (!/\bBookmark\b/.test(lucideLine)) {
    o = o.replace(/\}\s*from "lucide-react";/, ", Bookmark } from \"lucide-react\";");
  }
  const card = `          <Link href="/account/bookmarks" className="surface-card group flex items-center gap-3 p-6 transition hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center text-medical-blue"><Bookmark className="h-5 w-5" /></span>
            <div className="flex-1">
              <h2 className="font-semibold text-deep-blue">Bookmarks</h2>
              <p className="text-body text-muted-foreground">Books and resources you've saved to read again.</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />
          </Link>

`;
  // insert the Bookmarks card right before the My notes card
  o = o.replace(anchorNotes, card + anchorNotes);
  return o;
});
