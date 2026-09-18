/**
 * Put the whole Question Bank behind premium (in sync with books): taking any
 * quiz, and opening any category, requires access. The top-level Question Bank
 * page stays open as a funnel; the free "Question of the Day" set and the
 * colleges-universities request flow are preserved.
 * Run from project root:  node scripts/gate-question-bank.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

// Quiz page — gate every quiz; drop the now-unused ancestors fetch/import.
edit("app/question-bank/[category]/[quiz]/page.tsx", (s) => {
  let out = s;
  out = out.replace('import { getQuizBySlug, getCategoryAncestors } from "@/lib/queries/quizzes";',
                    'import { getQuizBySlug } from "@/lib/queries/quizzes";');
  out = out.replace('const [ancestors, student] = await Promise.all([getCategoryAncestors(q.categoryId), getStudent()]);',
                    'const student = await getStudent();');
  out = out.replace('const premiumBranch = ancestors.some((a) => a.premium);',
                    'const premiumBranch = true; // the whole Question Bank is premium');
  return out;
});

// Category page — gate every category (breadcrumbs still use ancestors).
edit("app/question-bank/[category]/page.tsx", (s) =>
  s.replace('const premiumBranch = node.premium || ancestors.some((a) => a.premium);',
            'const premiumBranch = true; // the whole Question Bank is premium')
);
