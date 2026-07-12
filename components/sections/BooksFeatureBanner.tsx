import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Books feature banner.
 *
 * The NCLEX study photo now genuinely SHOWS — previously it sat behind a heavy
 * blur and a white gradient, so it was effectively invisible. It now sits in its
 * own panel beside the copy, at full resolution, using the image's natural 3:2
 * proportions so nothing is cropped awkwardly — and it's visible on phones too
 * (it stacks above the text), not just on laptops.
 */
export function BooksFeatureBanner() {
  return (
    <Container>
      <Reveal>
        <div className="surface-card overflow-hidden">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Photo — full resolution, natural proportions, on every device */}
            <div className="relative order-1 aspect-[3/2] w-full lg:h-full lg:min-h-[22rem]">
              <Image
                src="/images/study-nclex.jpg"
                alt="A nursing student revising with NCLEX preparation books"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Copy */}
            <div className="order-2 p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral">Study smarter</p>
              <h2 className="text-h2 mt-3 text-deep-blue">Books &amp; study guides that move the needle</h2>
              <p className="text-body mt-4 text-deep-blue/70">
                Curated exam prep, core texts, and digital downloads — chosen to help you focus on what matters and
                study with confidence. Read any title online, right here on the site.
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
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
