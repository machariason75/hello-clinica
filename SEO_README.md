# Discoverability — the layer that makes everything else compound

## What was wrong
Your sitemap listed NINE static pages. It didn't include /question-bank at all —
your paid product — let alone the individual quizzes, books, and topic sections.

For an education site those long-tail pages ARE the acquisition channel. People
search "NCLEX pharmacology practice questions", not "medical education platform".
Those pages existed but search engines had no reliable way to find them.

Structured data was also site-level only (one Organization block), so no content
page could ever earn a rich result.

## What changed (5 files)

### 1. The sitemap is now generated from your data
Every published quiz, Question Bank section, book, book category, resource
category and advising service is included automatically, with real
last-modified dates. Free sections are given a higher priority than premium ones,
because free content is what wins search traffic and pulls people in.

It's derived, so it stays correct as you publish. Nothing to maintain.

If the database is briefly unreachable it still serves the static routes rather
than erroring — a partial sitemap beats no sitemap.

### 2. Structured data on the pages that matter
Five new schema helpers in lib/seo.ts, applied where they earn their keep:

  - QUIZ pages     -> Quiz schema + breadcrumbs
  - ADVISING pages -> FAQPage schema + breadcrumbs
  - BOOK pages     -> Book schema + breadcrumbs

FAQ markup is the highest-value one here: Google renders those as expandable
questions directly in the results, so your listing occupies far more of the page
than a plain blue link. Your advising services already had real FAQs written —
they just weren't being marked up.

Premium quizzes still emit schema deliberately: the PAGE should be indexed and
found, it's the questions behind it that are gated. That's how you get found by
people who then subscribe.

## Install
1. Extract the CONTENTS -> Replace all (5 files).
2. npx tsc --noEmit      <- expect no errors
   npm run dev
3. Check it worked:
   Visit  http://localhost:3000/sitemap.xml
   You should now see dozens of URLs, not nine.
4. git add .
   git commit -m "seo: dynamic sitemap and structured data for rich results"
   git push

## AFTER DEPLOYING — do this, it's the part that actually matters
1. Go to Google Search Console (search.google.com/search-console)
2. Add and verify helloclinica.com if you haven't
3. Sitemaps -> submit:  https://helloclinica.com/sitemap.xml
4. Use the Rich Results Test (search.google.com/test/rich-results) on one quiz
   page and one advising page to confirm the schema is detected.

Indexing takes days to weeks. This is a compounding investment, not an overnight
change — but nothing else you do in marketing works properly until search engines
can see your content.
