/**
 * Dark mode Phase 1: adds dark CSS-variable tokens to globals.css and a no-flash
 * theme script to app/layout.tsx. (Toggle component ships separately.)
 * Run from project root:  node scripts/darkmode-p1.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

// 1) dark tokens — appended once
edit("app/globals.css", (s) => {
  if (s.includes("/* DARK MODE TOKENS */")) return s;
  const dark = `

/* DARK MODE TOKENS */
@layer base {
  .dark {
    --background: 200 30% 8%;
    --foreground: 32 30% 92%;
    --card: 200 24% 12%;
    --card-foreground: 32 30% 92%;
    --popover: 200 24% 12%;
    --popover-foreground: 32 30% 92%;
    --primary: 16 80% 52%;
    --primary-foreground: 0 0% 100%;
    --secondary: 200 20% 16%;
    --secondary-foreground: 32 30% 92%;
    --muted: 200 18% 18%;
    --muted-foreground: 200 12% 66%;
    --accent: 188 78% 46%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 72% 55%;
    --destructive-foreground: 0 0% 100%;
    --success: 152 52% 44%;
    --success-foreground: 0 0% 100%;
    --border: 200 16% 24%;
    --input: 200 16% 26%;
    --ring: 188 78% 46%;
  }
  .dark body { background-color: hsl(var(--background)); }
}
`;
  return s + dark;
});

// 2) no-flash theme script in <head> (before paint)
edit("app/layout.tsx", (s) => {
  if (s.includes("__theme_init")) return s;
  const script = `        <script
          id="__theme_init"
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}",
          }}
        />
`;
  // insert right after the body tag (exact anchor)
  return s.replace('<body className="min-h-screen font-sans">', '<body className="min-h-screen font-sans">\n' + script);
});
