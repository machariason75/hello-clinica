# Question Bank hero photos + admin photos fixed on mobile

## 1. Question Bank now has a hero photo strip
I found your NCLEX image — it was public/images/study-nclex.jpg (it was only
being used in a Books banner). It now anchors a 3-photo collage at the top of
/question-bank, alongside two medic photos, echoing the accent photos on the
admin dashboard so the paid section feels premium rather than bare.

Underneath sits a short "what you get" line (Practice + real exams / Timed or
study mode / Topic breakdowns & rationales) so the strip is informative, not
just decorative.

It stays visible on phones — the collage simply reflows from an offset,
tilted arrangement into an even row.

## 2. Admin dashboard photos now show on phones and tablets
They were set to `hidden ... lg:block`, meaning laptop-only. (I did that
originally so the floating collage wouldn't collide with the welcome text on
narrow screens.)

Fixed properly: desktop keeps the floating collage exactly as it was, and
phones/tablets now get the same three photos as a clean tilted row beneath the
welcome text — so the dashboard keeps its warmth on every device instead of
going bare.

## Install
1. Extract the CONTENTS into your project (NO nested hello-clinica folder!)
   -> Replace all (3 files).
2. npx tsc --noEmit     <- expect no errors
   npm run dev
   Check /question-bank (photo strip at the top) and /admin/dashboard on a
   narrow window — the photos should now appear.
3. git add .
   git commit -m "question bank hero photos, admin photos visible on mobile"
   git push
