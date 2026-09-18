/** Wires auto-notifications: "Request received" on submit, "Access granted" on grant.
 *  Line-ending safe. Run from project root:  node scripts/notif-hooks.mjs */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }

const REQ_NOTE =
  '    await createNotification(student.id, {\n' +
  '      kind: "system",\n' +
  '      title: "Request received",\n' +
  '      body: "Thanks! We received your course access request and will review it shortly. You will be notified here when it is approved.",\n' +
  '    });\n' +
  '    return { success: true };';

edit("lib/student/requests.ts", (s) => {
  let out = s;
  if (!out.includes('from "@/lib/actions/notifications"')) {
    out = out.replace('import { getStudent } from "@/lib/student/auth";',
                      'import { getStudent } from "@/lib/student/auth";\nimport { createNotification } from "@/lib/actions/notifications";');
  }
  if (!out.includes('title: "Request received"')) {
    out = out.replace("    return { success: true };", REQ_NOTE);
  }
  return out;
});

const GRANT_NOTE =
  '      await prisma.student.update({ where: { id: req.studentId }, data: { hasAccess: true } });\n' +
  '      await createNotification(req.studentId, {\n' +
  '        kind: "access",\n' +
  '        title: "Course access granted",\n' +
  '        body: "Your premium access is now active - the full Question Bank and books are unlocked. Happy studying!",\n' +
  '        actionUrl: "/question-bank",\n' +
  '      });';

edit("lib/actions/admin-content.ts", (s) => {
  let out = s;
  if (!out.includes('from "@/lib/actions/notifications"')) {
    out = out.replace('import { prisma } from "@/lib/prisma";',
                      'import { prisma } from "@/lib/prisma";\nimport { createNotification } from "@/lib/actions/notifications";');
  }
  if (!out.includes('title: "Course access granted"')) {
    out = out.replace(
      '      await prisma.student.update({ where: { id: req.studentId }, data: { hasAccess: true } });',
      GRANT_NOTE
    );
  }
  return out;
});
