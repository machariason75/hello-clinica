import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Books feature banner — the NCLEX study scene sits softly blurred behind the
 * text (so no branded cover reads prominently), with a white gradient keeping
 * the copy crisp and accessible.
 */
export function BooksFeatureBanner() {
  return (
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-card border border-white/50 shadow-card">
          {/* Blurred study scene + readability gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/study-nclex.jpg"
              alt=""
              className="h-full w-full scale-110 object-cover blur-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/55" />
          </div>

          <div className="relative grid gap-6 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">
                Study smarter
              </p>
              <h2 className="text-h2 mt-3 text-deep-blue">
                Books &amp; study guides that move the needle
              </h2>
              <p className="text-body mt-4 text-deep-blue/70">
                Curated exam prep, core texts, and digital downloads — chosen to help you focus on
                what matters and study with confidence.
              </p>
              <div className="mt-7">
                <Button asChild>
                  <Link href="#book-catalog">
                    Browse the library
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div aria-hidden="true" className="hidden lg:block" />
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
