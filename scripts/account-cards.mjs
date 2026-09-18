/** Adds "Notifications" (with unread badge) and "My notes" cards to the account
 *  overview. Idempotent. Run from project root:  node scripts/account-cards.mjs */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/account/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;

// imports
if (!s.includes("getUnreadNotificationCount")) {
  s = s.replace('import { getStudent } from "@/lib/student/auth";',
                'import { getStudent } from "@/lib/student/auth";\nimport { getUnreadNotificationCount } from "@/lib/queries/notifications";');
}
if (!/\bBell\b/.test(s.split("\n").find((l) => l.includes('from "lucide-react"')) || "")) {
  s = s.replace(/\}\s*from "lucide-react";/, ", Bell, StickyNote } from \"lucide-react\";");
}
// unread fetch
if (!s.includes("const unread =")) {
  s = s.replace("  const { need } = await searchParams;",
                "  const { need } = await searchParams;\n  const unread = await getUnreadNotificationCount(student.id);");
}
// insert cards after the results & review card (first results Link)
const anchor = '            <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />\n          </Link>';
if (s.includes(anchor) && !s.includes('href="/account/notifications"')) {
  const cards = anchor + `

          <Link href="/account/notifications" className="surface-card group flex items-center gap-3 p-6 transition hover:shadow-md">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-bg text-medical-blue">
              <Bell className="h-5 w-5" />
              {unread > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-coral px-1 text-xs font-semibold text-white">{unread}</span>
              )}
            </span>
            <div className="flex-1">
              <h2 className="font-semibold text-deep-blue">Notifications</h2>
              <p className="text-body text-muted-foreground">{unread > 0 ? \`\${unread} new update\${unread === 1 ? "" : "s"}\` : "Updates about your access and activity."}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />
          </Link>

          <Link href="/account/notes" className="surface-card group flex items-center gap-3 p-6 transition hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-bg text-medical-blue"><StickyNote className="h-5 w-5" /></span>
            <div className="flex-1">
              <h2 className="font-semibold text-deep-blue">My notes</h2>
              <p className="text-body text-muted-foreground">All the notes you've taken while reading, grouped by book or resource.</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />
          </Link>`;
  s = s.replace(anchor, cards);
}
if (s === before) console.log("No change (already added?).");
else { writeFileSync(p, s, "utf8"); console.log("Added Notifications + My notes cards to the account overview."); }
