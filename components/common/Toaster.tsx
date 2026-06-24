"use client";

import { Toaster as SonnerToaster } from "sonner";

/** App-wide toast host (success/error notifications). */
export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        classNames: {
          toast: "rounded-xl border border-border bg-white text-deep-blue shadow-card",
          title: "font-semibold",
          description: "text-muted-foreground",
        },
      }}
    />
  );
}
