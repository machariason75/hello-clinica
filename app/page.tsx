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

// The Question of the Day changes at UTC midnight, so the cached homepage must
// expire quickly or it would keep serving yesterday's question for up to an
// hour. Sixty seconds means the rollover is effectively automatic — it does not
// wait for anyone to visit, and no one sees a stale question.
//
// (Next.js requires this to be a literal, so it can't be computed as "seconds
// until midnight". A short fixed window achieves the same result.)
//
// The cost is negligible: since the day's question is now stored in
// daily_question_picks, resolving it is two indexed lookups rather than loading
// the whole question pool.
export const revalidate = 60;

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
