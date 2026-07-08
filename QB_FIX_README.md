# Slice 2 fix — Question Bank folders + Vercel build

Two tiny fixes:
1. lib/queries/quizzes.ts — removed a filter on a "archived" field that the Quiz
   table doesn't have. This is what stopped the Question Bank sub-folders from
   opening on localhost.
2. package.json — @uploadthing/react pinned to ^6 (the ^6.8.1 version doesn't
   exist, which failed the Vercel build).

## Install
1. Extract over your hello-clinica folder -> Replace all (2 files).
2. Reinstall so the good uploadthing version is locked in:
       npm install --legacy-peer-deps
3. Test:  npm run dev   -> open Question Bank -> Nursing Exams / TEAS / etc.
   The sub-folders now open.
4. Push:
       git add .
       git commit -m "fix: quiz archived filter + uploadthing version"
       git push
