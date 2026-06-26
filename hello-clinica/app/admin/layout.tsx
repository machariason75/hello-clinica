import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@uploadthing/react/styles.css";
import { AdminSessionProvider } from "@/components/admin/AdminSessionProvider";

export const metadata: Metadata = {
  title: "Admin · Hello Clinica",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminSessionProvider>{children}</AdminSessionProvider>;
}
