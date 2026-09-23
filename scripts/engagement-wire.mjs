/** Adds an "Advising" card to the account overview and an "Engagements" link to
 *  the admin dashboard. Idempotent. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

// account overview card
edit("app/account/page.tsx", (s) => {
  if (s.includes('href="/account/engagements"')) return s;
  const anchor = '          <Link href="/account/notes"';
  if (!s.includes(anchor)) return s;
  let o = s;
  const lucideLine = o.split("\n").find((l) => l.includes('from "lucide-react"')) || "";
  if (!/\bMessagesSquare\b/.test(lucideLine)) o = o.replace(/\}\s*from "lucide-react";/, ", MessagesSquare } from \"lucide-react\";");
  const card = `          <Link href="/account/engagements" className="surface-card group flex items-center gap-3 p-6 transition hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center text-medical-blue"><MessagesSquare className="h-5 w-5" /></span>
            <div className="flex-1">
              <h2 className="font-semibold text-deep-blue">Your advising</h2>
              <p className="text-body text-muted-foreground">Your plan, progress, and messages with the team.</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-coral" />
          </Link>

`;
  return o.replace(anchor, card + anchor);
});

// admin dashboard Manage link
edit("app/admin/dashboard/page.tsx", (s) => {
  if (s.includes('href: "/admin/engagements"')) return s;
  let o = s;
  const lucideLine = o.split("\n").find((l) => l.includes('from "lucide-react"')) || "";
  if (!/\bMessagesSquare\b/.test(lucideLine)) o = o.replace(/\}\s*from "lucide-react";/, ", MessagesSquare } from \"lucide-react\";");
  o = o.replace('href: "/admin/notifications", icon: Bell },',
                'href: "/admin/notifications", icon: Bell },\n                { label: "Engagements", sub: "Advising workspaces", href: "/admin/engagements", icon: MessagesSquare },');
  return o;
});
