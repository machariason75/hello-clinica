import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { FeaturedResources } from "@/components/sections/FeaturedResources";
import { AdvisingServices } from "@/components/sections/AdvisingServices";
import { BooksSection } from "@/components/sections/BooksSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { CtaSection } from "@/components/sections/CtaSection";

/**
 * Homepage — assembles the nine frozen sections in order. The Footer (section
 * nine) is rendered globally by the root layout.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <FeaturedResources />
      <AdvisingServices />
      <BooksSection />
      <Testimonials />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
