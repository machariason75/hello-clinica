import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { FeaturedResources } from "@/components/sections/FeaturedResources";
import { AdvisingServices } from "@/components/sections/AdvisingServices";
import { BooksSection } from "@/components/sections/BooksSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { QuestionOfTheDay } from "@/components/sections/QuestionOfTheDay";
import { getQuestionOfTheDay } from "@/lib/queries/question-of-day";
import { getDailyState } from "@/lib/student/daily-question";

// Refresh hourly so the Question of the Day actually rolls over at midnight
// rather than being frozen in a static build.
export const revalidate = 3600;

/**
 * Homepage — assembles the nine frozen sections in order. The Footer (section
 * nine) is rendered globally by the root layout.
 */
export default async function HomePage() {
  // Free daily question — a reason to come back, and proof of quality for
  // first-time visitors. Renders nothing if no free questions exist yet.
  const [daily, dailyState] = await Promise.all([getQuestionOfTheDay(), getDailyState()]);

  return (
    <>
      <Hero />
      <TrustIndicators />
      {daily && <QuestionOfTheDay question={daily} initialState={dailyState} />}
      <FeaturedResources />
      <AdvisingServices />
      <BooksSection />
      <Testimonials />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
