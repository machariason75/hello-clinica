# Images — Question Bank collage + NCLEX photo restored on Books

## 1. Question Bank now uses the ADMIN DASHBOARD photos
Swapped to the same three medic photos in the same tilted arrangement you liked
on the admin dashboard (medic-2 / medic-5 / medic-3). Visible on every device —
phones get the same aesthetic row, which is where you said it looks best.

The cropping you saw was my fault: I'd forced a wide photo into a short fixed-
height box, so object-cover chopped it. The medic photos are portraits, so they
sit correctly in this arrangement.

## 2. The NCLEX photo now ACTUALLY APPEARS on Books
Here's why you never saw it: it WAS on the Books page, but it was rendered with
`blur-2xl` behind a white gradient — deliberately hidden as a background texture.
Effectively invisible.

Now it's a real, visible photo:
  - full resolution (next/image, priority loading)
  - natural 3:2 proportions — not squashed or cropped awkwardly
  - sits beside the copy on laptops, and STACKS ABOVE it on phones/tablets
    (so it shows on every device, which it never did before)

## Install
1. Extract the CONTENTS into your project -> Replace all (4 files).
2. npx tsc --noEmit     <- expect no errors
   npm run dev
   Check /question-bank (medic collage) and /books (NCLEX photo, clearly visible).
   View both on a narrow window too.
3. git add .
   git commit -m "images: question bank collage, restore NCLEX photo on books"
   git push
