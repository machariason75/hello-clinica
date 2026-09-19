/** Makes Bookmarks + Notes require granted premium (hasAccess). */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

edit("components/reader/ReaderView.tsx", (s) => {
  let o = s;
  // pass canSave (premium) to the bookmark button
  o = o.replace('<BookmarkButton itemType={itemType} itemId={itemId} signedIn={signedIn} />',
                '<BookmarkButton itemType={itemType} itemId={itemId} signedIn={signedIn} canSave={isPremium} />');
  // gate the Notes save panel on premium instead of just signed-in
  o = o.replace('{signedIn ? (', '{isPremium ? (');
  o = o.replace('<Link href="/account/login" className="font-medium text-medical-blue hover:underline">Sign in</Link> to save notes as you read.',
                'Notes unlock with premium access — <Link href="/account" className="font-medium text-medical-blue hover:underline">get access</Link>.');
  return o;
});
