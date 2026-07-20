# Fix — invalid comment syntax in schema.prisma

## My mistake
I used a /** ... */ block comment above the new DailyQuestionAttempt model.
Prisma's schema language does NOT support block comments — only // line
comments (and /// for documentation comments). Every line of that block was
read as an invalid statement, which is why you got 8 errors for one comment.

## The fix
Converted it to // line comments. Nothing else changed — same model, same
fields, same unique constraint. Verified: 30 models, braces balanced, and no
other block comments anywhere in the file.

## Install
1. Extract the CONTENTS -> Replace all (1 file: prisma/schema.prisma).
2. npx prisma db push      <- should now succeed
3. npx tsc --noEmit        <- expect no errors
   npm run dev
4. git add .
   git commit -m "growth: daily question with free daily set, shareable results"
   git push
