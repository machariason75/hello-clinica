# Drop A — Quiz & question authoring (+ hero slowdown)

Lets you build the Question Bank yourself: create quizzes, write/edit questions
and answers, mark correct choices, add rationales, and tune each quiz's settings.

## What you get
- Admin -> Question Bank now has a "Quizzes" table at the top:
  - "New quiz" -> set title, section, description, and type (Practice or Real
    exam) -> you're taken straight to the editor.
  - Publish/hide, edit, or delete any quiz.
- Quiz editor (per quiz):
  - Settings: title, slug, section, description, Practice/Exam, difficulty,
    pass mark, and TIME LIMIT in minutes. A "suggest" button proposes a sensible
    time for the number of questions (about 1.1 min each) — so a 200-question
    exam suggests ~220 min, which you can override.
  - Questions: add/edit/delete, choose type (single, select-all, true/false,
    fill-in-the-blank), write the stem, mark correct answer(s), set a topic (for
    the results breakdown), points, and a rationale shown to students on review.
- Hero slideshow on the homepage now transitions more slowly and gently
  (was too fast/"violent").

## Install — IN ORDER
1. Extract over your hello-clinica folder -> Replace all.
2. Update the database (adds a "kind" field to quizzes):
       npx prisma db push
3. Test:  npm run dev
   - Admin -> Question Bank -> New quiz -> add a couple of questions -> publish.
   - Open it on the site and play it.
4. Push:
       git add .
       git commit -m "Drop A: quiz & question authoring, hero slowdown"
       git push

Coming next (Drop B): attempt history + review with US letter grades, the
floating premium banner, download-gating, and 5+ seeded practice/real-exam sets.
