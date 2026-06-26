import { Suspense } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getAdminUser } from "@/lib/admin/auth-helpers";
import { LoginForm } from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const user = await getAdminUser();
  if (user) redirect("/admin/dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="Hello Clinica"
            width={290}
            height={134}
            priority
            className="mb-5 h-12 w-auto"
          />
          <h1 className="text-h2 text-deep-blue">Admin Sign In</h1>
          <p className="text-body mt-2 text-muted-foreground">
            Hello Clinica administration. Authorized access only.
          </p>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <Suspense fallback={<div className="h-64" />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
