# Fixing the "can't reach database" crash

Your instinct was right — it was doing too much at once. But the bigger fault
was mine: I put retry logic in the seed files and forgot it in the generator, so
the first dropped connection killed the whole run.

Both are fixed. Two commands.

---

## STEP 1 — Unzip and paste

1. Double-click the zip in **Downloads**. **Ctrl + A**, then **Ctrl + C**.
2. Open your **hello-clinica** folder. **Ctrl + V**.
3. Choose **"Replace the files in the destination."**

This replaces `generate-exams.ts` with the fixed version and adds a new
diagnostic tool.

Then in VS Code: **Terminal → New Terminal**.

---

## STEP 2 — Find out what's actually wrong

```
npx tsx prisma/db-check.ts
```

Changes nothing. It tests your connection three ways and tells you in plain
English which of these it is:

- the database is asleep or unreachable
- the connection works but is slow
- the connection works but drops under sustained use

**Read what it says at the end.** If it tells you to add DIRECT_URL, do Step 3.
If it says the connection looks healthy, skip to Step 4.

---

## STEP 3 — Only if db-check told you to

This is the one thing I can't automate, because it involves your database
password.

Supabase gives you two ways in:

- a **pooled** connection on port **6543** — fast for a website, but it closes
  connections that stay open, which is exactly what a long script does
- a **direct** connection on port **5432** — slower to open, but it stays put

Your `.env` probably only has the pooled one. To add the direct one:

1. In VS Code's file list on the left, click the file called **`.env`**
2. Find the line starting `DATABASE_URL=`
3. Copy that whole line and paste it underneath as a new line
4. On the **new** line only, change `DATABASE_URL` to `DIRECT_URL`
5. On that same new line, change the port number **6543** to **5432**
6. If the line ends with `?pgbouncer=true` or similar, delete that part
7. Press **Ctrl + S**

You should end up with two lines that are identical except for the name, the
port, and the removed `?pgbouncer=true`:

```
DATABASE_URL="postgresql://...@...supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://...@...supabase.com:5432/postgres"
```

Then run `npx tsx prisma/db-check.ts` again — it should now say it's using
DIRECT_URL.

**If you can't find `.env`** or the lines don't look like that, paste what you
see into the chat and I'll tell you exactly what to change. Don't paste the
password itself — replace it with the word PASSWORD first.

---

## STEP 4 — Generate the papers

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=70
```

If it still fails, do them one at a time:

```
npx tsx prisma/generate-exams.ts fs-pharmacology --size=70 --paper=1
```

then `--paper=2`, `--paper=3`, and so on up to 7. Each paper is independent, so
stopping between them loses nothing, and you can pick up where it stopped.

---

# WHAT I CHANGED

**It was making about 504 database calls.** For each of seven papers it created
seventy questions one at a time, each with its choices attached. Long before the
end, Supabase's pooler had closed the connection.

It now writes in batches — all seventy questions in one statement, then all 280
choices in two more:

| | before | now |
|---|---|---|
| calls per paper | 72 | 6 |
| calls for 7 papers | 504 | 42 |

**Every call now retries, and reconnects between attempts.** That last part
matters: once the pooler has closed the socket, retrying on the same dead
connection fails every time. It now drops the connection and makes a fresh one,
waiting a little longer each attempt.

I checked the retry only triggers on connection problems. A real error — a bad
value, a duplicate slug — still fails immediately and shows you the message,
rather than being retried five times and buried.

**It prefers DIRECT_URL when one exists**, and tells you which it's using on the
first line of output.

**And it's resumable.** `--paper=3` does just that paper.

---

# IF IT STILL FAILS

Copy the whole error into the chat. But check one thing first:

**Is your Supabase project paused?** Open your Supabase dashboard. Free projects
pause themselves after a period without traffic, and everything reports "can't
reach database" until you resume them. It takes a minute to wake up.

---

# ONE THING WORTH KNOWING

The same batching problem will appear as sections get bigger — a 350-question
practice pool generating 100-question papers is a lot more writing than what
you're running now.

The seed files are already safe: they retry, they reconnect, and they write one
question at a time deliberately so a failure halfway leaves the earlier
questions in place. Slower, but restartable. The generator can batch because if
a paper fails it's simply regenerated from scratch — nothing is lost.

So: seeds are slow and safe, the generator is fast and disposable. That's
intentional now rather than accidental.
