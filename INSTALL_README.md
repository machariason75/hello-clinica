# Hello Clinica — Audiobooks + Exam Coaching

Two features in one drop, 20 files. They don't touch the same files, so install
them together and push once.

---

# INSTALL — follow in order

### 1. Extract
Open the zip, go INTO the `hello-clinica` folder, and drag its CONTENTS
(`app`, `components`, `lib`, `prisma`) into:

    C:\Users\user\Documents\hello-clinica

Choose **Replace the files in the destination**.

> ⚠️ Do NOT drag the `hello-clinica` folder itself — that creates
> `hello-clinica\hello-clinica\` and nothing you install will take effect.

**Spot-check it landed:** open `lib/data/advising-services.ts` and search for
"Exam Coaching". If it still says "Interview Coaching", the extract didn't work.

### 2. Add the audio tables
```
npx prisma db push
```
This ADDS two new tables (`audio_tracks`, `audio_progress`). Nothing existing is
touched or deleted. If it asks about a unique constraint on a brand-new column,
that's safe — press `y`.

### 3. Check it compiles
```
npx tsc --noEmit
```
**Silence means no errors.** If anything prints, stop and send it to me before
pushing — that's the whole point of this step.

### 4. Look at it
```
npm run dev
```
Then check these five things:

**Exam Coaching**
- Homepage → the services section shows "Exam Coaching"
- `/advising/exam-coaching` loads with the new content
- Advising dropdown in the top nav says "Exam Coaching"

**Audiobooks**
- Admin → Books → click the **♪ music icon** on any book row
- Add a chapter (upload a file, or paste a link), tick Published, save
- Open that book on the public site → a **"Listen to the audiobook"** button
  should now be there → click it and press play

### 5. Push
```
git add .
```
```
git commit -m "feat: audiobooks; advising: rename Interview Coaching to Exam Coaching"
```
```
git push
```

### 6. Go live
Vercel → **Deployments** → wait for **Ready** → then hard-refresh the live site
with **Ctrl+Shift+R**.

---

# WHAT'S IN IT

## 1. Audiobooks (15 files)

**For listeners — `/listen/<bookId>`**
A "Listen to the audiobook" button appears on a book ONLY once it actually has
published audio. The player has:
- Play/pause, seek bar, chapter list
- **Speed:** 0.75x / 1x / 1.25x / 1.5x / 1.75x / 2x
- Skip back 15s, skip forward 30s, previous/next chapter
- Auto-advance to the next chapter
- **Resume where you left off** — across devices, for signed-in students
- Ticks on finished chapters
- Distraction-free page (site header/footer hidden, like the reader)

**For you — Admin → Books → the ♪ icon**
- Add chapters, reorder, publish/hide, delete
- Each chapter is EITHER an uploaded audio file OR a link to an audiobook hosted
  elsewhere (Audible, YouTube, a library — anywhere)
- Optional narrator and length

**Security — the same model as your PDFs**
Uploaded audio streams through `/api/read-audio`, so the real UploadThing URL
never reaches the browser, and the endpoint refuses requests that don't come from
your own site. One addition over the PDF route: Range request support, which is
what makes the scrub bar and skip buttons actually work.

**Analytics that can't double-count**
`audio_progress` has a unique constraint on (studentId, trackId). One student can
only ever have ONE row per chapter, however many times the player checks in — so
conflicting listen data is impossible at the database level, not just discouraged
in code.

**Limits worth knowing**
- 64 MB per uploaded chapter. Split long books into chapters, or use the "Link
  elsewhere" option — that's exactly what it's for.
- External chapters open on the provider's own player in a new tab. We can't
  control playback or track progress there.
- **Listening is FREE**, mirroring "reading is free". Downloads stay premium. If
  you'd rather gate audio behind premium, that's a one-line change — just ask.

## 2. Exam Coaching (5 files)

"Interview Coaching" is now "Exam Coaching" everywhere, with the content genuinely
rewritten rather than relabelled:
- New overview aimed at NCLEX / USMLE / TEAS / HESI / NAPLEX candidates
- Six "what's included" points (study plan, diagnostic review, question-reading
  technique, pacing, exam anxiety, guided Question Bank practice)
- Four real FAQs — which exams, when to start, coaching after a failed attempt,
  and whether Question Bank access is needed
- Icon changed from a speech bubble to a target
- Updated in: the homepage card, the Advising nav menu, the contact form's
  "reason" dropdown, and the admin FAQ category label

**Two deliberate decisions:**

1. **The database enum key is unchanged.** Internally the FAQ category is still
   `INTERVIEW_COACHING`; only the label you see changed. This means NO migration,
   and every FAQ already filed under it keeps working. Users never see the key.

2. **The URL changed:** `/advising/interview-coaching` → `/advising/exam-coaching`
   Better for search traffic, which was the point. Any old bookmark will 404 —
   if you'd rather keep the old URL working, say so and I'll add a redirect
   (a 2-line change in `next.config.mjs`).

The copy deliberately ties Exam Coaching to the Question Bank, so the two
products reinforce each other instead of sitting side by side.

---

# IF SOMETHING GOES WRONG

**`npx tsc --noEmit` prints errors** → don't push. Send me the output.

**"Listen" button doesn't appear** → the book has no PUBLISHED chapter yet. Add
one in Admin → Books → ♪ and make sure "Published" is ticked.

**Audio won't play** → check the chapter's source. If it's an upload, confirm the
file finished uploading (you should see a preview). If it's a link, open the link
in a new tab to confirm it works.

**`prisma db push` warns about data loss** → for these two NEW tables it
shouldn't. If it mentions dropping anything, STOP and send me the message.
