import { Container } from "@/components/common/Container";

/**
 * App-wide loading fallback — shown briefly while a page's data resolves, so
 * navigation feels instant. Cached pages render so fast this rarely appears;
 * it mainly smooths dynamic pages (search, admin) and first/uncached loads.
 */
export default function Loading() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-3xl animate-pulse space-y-6" aria-hidden="true">
        <div className="h-4 w-28 rounded-full bg-deep-blue/10" />
        <div className="h-10 w-3/4 rounded-2xl bg-deep-blue/10" />
        <div className="h-4 w-full rounded-full bg-deep-blue/10" />
        <div className="h-4 w-5/6 rounded-full bg-deep-blue/10" />
        <div className="grid gap-5 pt-6 sm:grid-cols-3">
          <div className="h-40 rounded-card bg-deep-blue/10" />
          <div className="h-40 rounded-card bg-deep-blue/10" />
          <div className="h-40 rounded-card bg-deep-blue/10" />
        </div>
      </div>
      <span className="sr-only" role="status">
        Loading…
      </span>
    </Container>
  );
}
