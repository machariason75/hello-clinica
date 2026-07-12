# Declutter — testimonial dots + Free Resources list

## 1. Testimonial dots removed
The dotted indicator strip under the student reviews is gone. The reviews still
rotate (and arrows/keyboard still work) — just the dots are removed, as asked.

## 2. Free Resources is no longer a wall of empty folders
IMPORTANT — I did NOT delete any categories. Here's why that matters: each
category maps to a database enum, and any guide you upload is filed under one of
them. Deleting a category would have orphaned its page and made those guides
unreachable — real content loss.

Instead, /resources now shows ONLY:
  - categories that actually contain guides, and
  - the "Nursing Resources" gateway (which leads to its own 12-topic library)

So the page reflects what the site really contains. It is also SELF-MAINTAINING:
upload a guide into any category in the admin, and that category appears on the
page automatically. Remove the last guide and it quietly disappears again. You
never have to edit code to keep the list honest.

Nursing Resources (the 12 topics) is untouched — the seed filled those with real
material, so they aren't empty.

## Install
1. Extract the CONTENTS into your project -> Replace all (2 files).
2. npx tsc --noEmit      <- expect no errors
   npm run dev
   Check: /resources is short and relevant; testimonials have no dots.
3. git add .
   git commit -m "declutter: remove testimonial dots, show only populated resource categories"
   git push

## If /resources now looks TOO empty
That means most categories have no guides uploaded yet — the page is telling you
the truth. Upload guides in Admin -> Resources and the categories will reappear
as they fill up.
