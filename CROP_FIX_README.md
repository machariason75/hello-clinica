# Fix — Question Bank photos cropped on laptop/desktop

## What was wrong
I sized each photo box by fixed HEIGHT (h-24 / sm:h-32 / lg:h-40) while letting the
width stretch (flex-1). On a wide desktop each box became a long, short letterbox —
so object-cover chopped the top and bottom off the photos. On a phone the box was
naturally narrow, which is why it looked fine there but wrong on desktop.

## The fix
Each box now uses an ASPECT RATIO (4:3) that matches the photos' true shape
(980x735), instead of a fixed height. The box always matches the image, so nothing
is cropped at any screen size. The strip is also width-capped (max-w-3xl) and
centred, so it can't stretch into letterboxes on very wide monitors.

Also added object-top, so if any minor trimming ever happens, faces stay in frame.

## Install
1. Extract the CONTENTS -> Replace all (1 file:
   components/quiz/QuestionBankHero.tsx).
2. npx tsc --noEmit
   npm run dev   -> check /question-bank on a MAXIMISED laptop window and narrow.
3. git add .
   git commit -m "fix: question bank photos no longer cropped on desktop"
   git push
