/**
 * Removes duplicate account-overview cards (keeps the first of each).
 * Handles My notes, Notifications, and Bookmarks cards. Safe to run repeatedly.
 * Run from project root:  node scripts/dedupe-account-cards.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/account/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
let removed = 0;
for (const href of ["/account/notes", "/account/notifications", "/account/bookmarks"]) {
  let seen = 0;
  const re = new RegExp('\\n[ \\t]*<Link href="' + href.replace(/\//g, "\\/") + '"[\\s\\S]*?<\\/Link>', "g");
  s = s.replace(re, (m) => (++seen === 1 ? m : (removed++, "")));
}
if (s === before) console.log("No duplicates found. (If you still see two on the site, the build isn't deploying — see below.)");
else { writeFileSync(p, s, "utf8"); console.log(`Removed ${removed} duplicate card(s).`); }
