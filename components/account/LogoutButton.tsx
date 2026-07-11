"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutStudent } from "@/lib/student/auth";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <Button variant="secondary" disabled={isPending} onClick={() => startTransition(async () => { await logoutStudent(); router.push("/"); router.refresh(); })}>
      <LogOut className="mr-1.5 h-4 w-4" /> Sign out
    </Button>
  );
}
