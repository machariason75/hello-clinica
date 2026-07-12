# Fix — broken JSX in question-bank page

My Quick Access insert put two sibling elements inside a ternary branch, which can
only hold one. Wrapped them in a fragment (<>...</>). Structure verified balanced.

## Install
1. Extract the CONTENTS -> Replace all (1 file: app/question-bank/page.tsx).
2. npx tsc --noEmit     <- expect no errors
   npm run dev          <- /question-bank shows Quick Access + folders
3. git add .
   git commit -m "USMLE + pharmacy sections, quick access index"
   git push
