/** Adds a "Notifications" link to the admin dashboard's Manage list. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/admin/dashboard/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
if (!/\bBell\b/.test(s.split("\n").find((l) => l.includes('from "lucide-react"')) || "")) {
  s = s.replace(/\}\s*from "lucide-react";/, ", Bell } from \"lucide-react\";");
}
if (!s.includes('href: "/admin/notifications"')) {
  s = s.replace(
    'href: "/admin/access-requests", icon: KeyRound },',
    'href: "/admin/access-requests", icon: KeyRound },\n                { label: "Notifications", sub: "Send notices, read replies", href: "/admin/notifications", icon: Bell },'
  );
}
if (s === before) console.log("No change (already added?).");
else { writeFileSync(p, s, "utf8"); console.log("Added Notifications to the admin Manage list."); }
