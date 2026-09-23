/** Removes the NewsletterSection from the homepage (it now lives at /newsletter). */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
s = s.replace(/\n\s*<NewsletterSection\s*\/>/, "");
s = s.replace(/import \{ NewsletterSection \} from "@\/components\/sections\/NewsletterSection";\n/, "");
if (s === before) console.log("No change (NewsletterSection not found on homepage — tell me where it renders).");
else { writeFileSync(p, s, "utf8"); console.log("Removed NewsletterSection from the homepage."); }
