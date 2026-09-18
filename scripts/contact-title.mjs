import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p="app/contact/page.tsx";
if(!existsSync(p)){console.log("MISSING "+p);process.exit(0);}
let s=readFileSync(p,"utf8"); const b=s;
s=s.replace(/\n\s*<h2 className="text-h3 text-deep-blue">Reach us directly<\/h2>/,"");
if(s===b) console.log("no change (title not found)"); else { writeFileSync(p,s,"utf8"); console.log("Removed 'Reach us directly' title."); }
