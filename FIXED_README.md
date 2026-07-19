# CORRECTED PACK v3 — supersedes both previous attempts

## The three problems, and what fixed them

1. lib/validations.ts was OLDER than yours and dropped four exports
   (consultationSchema, contactMethodOptions, methodNeedsHandle,
   packageInquirySchema), breaking five files.
   FIX: recovered YOUR complete version from your original project zips and
   changed exactly one line: "Interview Coaching" -> "Exam Coaching".

2. The books page used <ReadOnlineButton> without importing it.
   FIX: import added; the duplicate lucide-react import merged into one.

3. components/reader/ReadOnlineButton.tsx did not exist in your project at all —
   it was written for an earlier drop but never actually landed.
   FIX: it is now INCLUDED in this pack (a new file, nothing overwritten).
   While adding it, I also gave it the radiant gradient treatment to match the
   rest of your buttons — teal gradient, so it reads as the secondary action
   beside the coral Download button.

## Verified before shipping
  - Every @/ import across the whole codebase resolves.
  - No shipped file exports less than your original version.
  - No duplicate declarations in the shared files.

## Install
1. Extract the CONTENTS over your project -> Replace all.
   (Safe to extract over the previous attempts — this supersedes them.)
2. npx prisma db push        (skip if you already ran it for the audio tables)
3. npx tsc --noEmit          <- should be SILENT
   npm run dev
4. git add .
   git commit -m "feat: audiobooks; advising: rename Interview Coaching to Exam Coaching"
   git push
5. Vercel -> Deployments -> Ready -> Ctrl+Shift+R on the live site.

## Quick test after it's running
  - Admin -> Books -> the MUSIC icon on any row -> Add chapter -> Published
  - Open that book publicly -> "Listen to the audiobook" appears -> press play
  - Check /advising/exam-coaching loads
