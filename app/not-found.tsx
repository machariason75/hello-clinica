import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-bold text-gradient">404</p>
      <h1 className="text-h2 mt-4 text-deep-blue">Page not found</h1>
      <p className="text-lead mt-3 max-w-md">
        The page you're looking for doesn't exist or may have moved. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Contact us
          </Link>
        </Button>
      </div>
    </Container>
  );
}
