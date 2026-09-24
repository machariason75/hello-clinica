"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h2 className="text-h3 text-deep-blue">Something went wrong</h2>
      <p className="max-w-md text-muted-foreground">That action went through, but the page hit a snag refreshing. Try again.</p>
      <button type="button" onClick={reset} className="rounded-xl bg-medical-blue px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
        Try again
      </button>
    </div>
  );
}
