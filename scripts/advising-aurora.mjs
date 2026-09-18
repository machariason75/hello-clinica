import { readFileSync, writeFileSync, existsSync } from "node:fs";
function edit(path, fn){ if(!existsSync(path)){console.log("MISSING "+path);return;} const b=readFileSync(path,"utf8"); const a=fn(b); if(a===b){console.log("no change "+path);return;} writeFileSync(path,a,"utf8"); console.log("updated  "+path); }
const IMP='import { NeonButton } from "@/components/common/NeonButton";';

edit("app/advising/[service]/page.tsx", (s) => {
  let o = s;
  if(!o.includes('NeonButton')) o=o.replace('import { Button } from "@/components/ui/button";', IMP);
  o=o.replace('<Button asChild>\n                  <Link href="/contact">Start a conversation</Link>\n                </Button>',
              '<NeonButton href="/contact">Start a conversation</NeonButton>');
  o=o.replace('<Button asChild size="lg" className="mt-6 w-full">\n                <Link href="/request-consultation">\n                  Request this service\n                  <ArrowRight className="h-4 w-4" aria-hidden="true" />\n                </Link>\n              </Button>',
              '<NeonButton href="/contact" className="mt-6">\n                Request this service\n                <ArrowRight className="h-4 w-4" aria-hidden="true" />\n              </NeonButton>');
  if(!/<Button[ >]/.test(o)) o=o.replace(IMP+'\n', IMP+'\n'); // keep import line; nothing else
  return o;
});

edit("components/packages/AcademicSupport.tsx", (s) => {
  let o = s;
  if(!o.includes('NeonButton')) o=o.replace(/import Link from "next\/link";\n/, 'import Link from "next/link";\n'+IMP+'\n');
  const old=`                    <Link
                      href={\`/request-consultation?package=\${encodeURIComponent(pkg.packageName)}\`}
                      className={
                        "focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition " +
                        (featured
                          ? "bg-gradient-to-r from-coral to-[#E8613F] text-white hover:opacity-90"
                          : "border-2 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/5")
                      }
                    >
                      {pkg.buttonText || "Request support"}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>`;
  const neo=`                    {featured ? (
                      <NeonButton href="/contact" className="shrink-0">
                        {pkg.buttonText || "Request support"}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </NeonButton>
                    ) : (
                      <Link
                        href="/contact"
                        className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-medical-blue/30 px-4 py-2.5 text-sm font-semibold text-medical-blue transition hover:bg-medical-blue/5"
                      >
                        {pkg.buttonText || "Request support"}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}`;
  if(o.includes(old)) o=o.replace(old,neo);
  return o;
});
