/** Contact page reads the WhatsApp number from settings; admin gets a Settings link. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

// contact page: async + read setting + dynamic wa.me link
edit("app/contact/page.tsx", (s) => {
  let o = s;
  if (!o.includes("getWhatsAppNumber")) {
    o = o.replace('import { siteConfig } from "@/lib/site-config";',
                  'import { siteConfig } from "@/lib/site-config";\nimport { getWhatsAppNumber } from "@/lib/settings";');
  }
  o = o.replace("export default function ContactPage() {",
                "export default async function ContactPage() {\n  const whatsapp = await getWhatsAppNumber();");
  o = o.replace('href="https://wa.me/17178137793"', 'href={`https://wa.me/${whatsapp}`}');
  return o;
});

// admin dashboard: Settings in the Manage list
edit("app/admin/dashboard/page.tsx", (s) => {
  if (s.includes('href: "/admin/settings"')) return s;
  let o = s;
  const lucideLine = o.split("\n").find((l) => l.includes('from "lucide-react"')) || "";
  if (!/\bSettings\b/.test(lucideLine)) o = o.replace(/\}\s*from "lucide-react";/, ", Settings } from \"lucide-react\";");
  // add after Notifications (or Engagements if present), else after access-requests
  if (o.includes('href: "/admin/engagements", icon: MessagesSquare },')) {
    o = o.replace('href: "/admin/engagements", icon: MessagesSquare },',
                  'href: "/admin/engagements", icon: MessagesSquare },\n                { label: "Settings", sub: "WhatsApp number, etc.", href: "/admin/settings", icon: Settings },');
  } else {
    o = o.replace('href: "/admin/access-requests", icon: KeyRound },',
                  'href: "/admin/access-requests", icon: KeyRound },\n                { label: "Settings", sub: "WhatsApp number, etc.", href: "/admin/settings", icon: Settings },');
  }
  return o;
});
