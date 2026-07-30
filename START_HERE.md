# Do this, in this order

You never have to write or edit any code. Everything is done by commands you
copy and paste.

Do one step, check it looks right, then move to the next. If anything looks
wrong, stop there and paste what you see into the chat.

About 10 minutes.

---

## STEP 1 — Unzip

The zip is in your **Downloads** folder.

1. Double-click it. A window opens showing folders named `lib`, `components`,
   `prisma`, `scripts`, and some `.md` files.
2. Press **Ctrl + A** (selects everything).
3. Press **Ctrl + C** (copies it).

---

## STEP 2 — Paste into your project

1. Open your **hello-clinica** folder — the one that already has folders called
   `app`, `components`, `lib` and `prisma` inside it.
2. Press **Ctrl + V**.
3. Windows asks about files that already exist. Choose
   **"Replace the files in the destination."**

Don't worry about getting this perfectly right. Step 4 checks it for you and
tells you exactly what to fix if it went wrong.

---

## STEP 3 — Open VS Code

1. Open **VS Code**.
2. **File → Open Folder…** → choose your `hello-clinica` folder → **Select Folder**.
3. **Terminal → New Terminal** from the menu at the top.

A panel opens at the bottom with a blinking cursor. That's where commands go.

**To run a command:** click into that bottom panel, paste, press **Enter**, and
wait for the blinking cursor to come back before pasting the next one. One at a
time, never two together.

---

## STEP 4 — Let it install itself

Paste this:

```
node scripts/apply-drop.mjs
```

This does all the code changes for you. You should see something like:

```
✓ Drop files are in the right place.
✓ Found your homepage: app/page.tsx
✓ Edited app/page.tsx
  · added the import line
  · added slotIndex={heroSlotIndex()} to <Hero>
  · set the homepage to refresh every 10 minutes
```

**If it says "STOPPED"** — read the message. It tells you exactly what to fix,
usually that the paste in Step 2 went one folder too deep. Fix it and run the
command again. Nothing was changed, so nothing is broken.

It's safe to run this more than once. If everything is already done it just says
"Nothing to do."

A copy of the original file is saved in a folder called `.drop-backups`, in case
we ever need it.

---

## STEP 5 — Check for mistakes

Paste:

```
npx tsc --noEmit
```

Wait — it can take a minute.

- **Nothing appears and the cursor comes back** → perfect. Go on.
- **Red text appears** → stop. Copy the red text into the chat. Don't continue.

This catches problems here on your computer, instead of on the live website.

---

## STEP 6 — Look at it on your own computer

Paste:

```
npm run dev
```

It prints a web address, usually `http://localhost:3000`. Hold **Ctrl** and click
it.

This is your site running privately on your machine. The real website hasn't
changed yet.

**Three things to look at:**

1. The homepage photo is fully there the instant the page loads, and doesn't
   move. Watch it for a minute — it should be completely still.
2. Go into the Question Bank, then come back to the homepage. The same photo is
   correct and expected — it changes every 10 minutes, not on every visit.
3. Wait about 5 minutes on the homepage. The Question Bank promo slides in at the
   bottom right. Close it with the small **×**. It should stay away for 10
   minutes, then return.

When you're finished: click in the terminal and press **Ctrl + C** to stop it.

---

## STEP 7 — Add the new questions

Paste:

```
npx tsx prisma/seed-infectious-diseases.ts
```

It prints a few lines and finishes with **"Done."**

Those 60 questions are on the real website immediately. Steps 8 and 9 aren't
needed for them.

---

## STEP 8 — Check the older questions

In the question sets added months ago, the correct answer is almost always the
first option. Students notice that.

First just look. This changes nothing:

```
npx tsx prisma/fix-choice-order.ts
```

It prints one line per quiz with a percentage. Numbers near 100% mean the answer
is always first in that set.

If the numbers confirm it, fix them:

```
npx tsx prisma/fix-choice-order.ts --apply
```

This only changes the order the options appear in. Nothing is deleted, and past
student results still work.

---

## STEP 9 — Publish

Three commands, one at a time:

```
git add .
```

```
git commit -m "hero settles, promo backs off, infectious diseases questions"
```

```
git push
```

After `git push`, Vercel starts building the new version by itself.

Go to **vercel.com** → your project → **Deployments**. The top entry says
**Building**. Wait for **Ready** — usually 1 to 3 minutes.

Then open your live website and check the homepage photo, same as Step 6.

---

# IF SOMETHING BREAKS

## The live site is broken and you want it working right now

Don't touch any code.

1. **vercel.com** → your project → **Deployments**
2. Find the entry *above* the broken one — the last one that said Ready before
   today
3. Click the **⋯** on its right → **Promote to Production**

The site goes back to normal within seconds. Then tell me what happened.

## Undo everything you just installed

In the VS Code terminal:

```
git revert HEAD
```

```
git push
```

That puts the code back and redeploys by itself.

## You've made a mess but haven't run `git push` yet

```
git checkout -- .
```

Throws away every change since your last push. Your project goes back to how it
was this morning. Then start again at Step 1.

---

# THE ONE THING WORTH UNDERSTANDING

Questions and website appearance travel by completely different routes, and they
don't affect each other.

**Questions** live in your database. Step 7 sends them there straight from your
computer, and they're live immediately. Pushing to git does nothing for them.

**How the site looks and behaves** lives in the code. Step 9 sends that to Vercel,
which rebuilds the site. That has nothing to do with questions.

This drop changes both, so it needs both.

**Also worth knowing:** when you add a password or key in Vercel's settings, it
does nothing until you click **Redeploy**. That will matter when you set up
Resend for emails.
