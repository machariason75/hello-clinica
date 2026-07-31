/**
 * Database connection check.
 *
 * Run this when a script reports "Can't reach database". It tells you whether
 * the problem is the connection itself, the connection URL you're using, or a
 * connection that works but drops under sustained use.
 *
 * Usage:  npx tsx prisma/db-check.ts
 */

import { PrismaClient } from "@prisma/client";

const DIRECT = process.env.DIRECT_URL;
const POOLED = process.env.DATABASE_URL;

function mask(url?: string) {
  if (!url) return "(not set)";
  try {
    const u = new URL(url);
    const port = u.port || "(default)";
    const pooled = u.port === "6543" || url.includes("pgbouncer");
    return `${u.hostname}  port ${port}  ${pooled ? "← pooled/pgbouncer" : "← direct"}`;
  } catch {
    return "(set, but not a readable URL)";
  }
}

async function main() {
  console.log("\n─── Connection settings ──────────────────────────────────\n");
  console.log(`  DATABASE_URL   ${mask(POOLED)}`);
  console.log(`  DIRECT_URL     ${mask(DIRECT)}`);

  const chosen = DIRECT || POOLED;
  if (!chosen) {
    console.log("\n  ✗ Neither is set. Check your .env file exists and has DATABASE_URL.\n");
    return;
  }
  console.log(`\n  Long scripts will use: ${DIRECT ? "DIRECT_URL" : "DATABASE_URL"}\n`);

  if (!DIRECT) {
    console.log("  Note: no DIRECT_URL is set. If DATABASE_URL is the pooled");
    console.log("  connection (port 6543), long-running scripts will keep dropping.");
    console.log("  Adding DIRECT_URL to .env usually fixes it — see START_HERE.\n");
  }

  const prisma = new PrismaClient({ datasources: { db: { url: chosen } } });

  console.log("─── Test 1: can we connect at all? ───────────────────────\n");
  const t0 = Date.now();
  try {
    await prisma.$connect();
    console.log(`  ✓ Connected in ${Date.now() - t0}ms`);
  } catch (e) {
    console.log(`  ✗ Could not connect.\n`);
    console.log(`  ${e instanceof Error ? e.message.split("\n")[0] : e}\n`);
    console.log("  Most likely causes, in order:");
    console.log("    1. Supabase project is PAUSED — check your Supabase dashboard.");
    console.log("       Free projects pause after a period of inactivity.");
    console.log("    2. No internet, or a firewall blocking the port.");
    console.log("    3. The password in .env has changed or contains an unescaped character.\n");
    return;
  }

  console.log("\n─── Test 2: how fast is a single query? ──────────────────\n");
  const t1 = Date.now();
  const count = await prisma.quiz.count();
  const ms = Date.now() - t1;
  console.log(`  ✓ Counted ${count} quizzes in ${ms}ms`);
  if (ms > 1500) {
    console.log(`  ⚠ That's slow. A script making hundreds of calls will struggle.`);
  }

  console.log("\n─── Test 3: does it survive 30 calls in a row? ───────────\n");
  let failed = 0;
  let slowest = 0;
  const start = Date.now();
  for (let i = 1; i <= 30; i++) {
    const s = Date.now();
    try {
      await prisma.quiz.count();
      slowest = Math.max(slowest, Date.now() - s);
    } catch (e) {
      failed++;
      console.log(`  ✗ call ${i} failed: ${e instanceof Error ? e.message.split("\n")[0].slice(0, 70) : e}`);
    }
    if (i % 10 === 0) process.stdout.write(`  … ${i}/30\r`);
  }
  const total = Date.now() - start;

  console.log(`  ${failed === 0 ? "✓" : "✗"} ${30 - failed}/30 succeeded in ${total}ms (slowest ${slowest}ms)`);

  console.log("\n─── Verdict ──────────────────────────────────────────────\n");
  if (failed === 0 && slowest < 1000) {
    console.log("  Connection looks healthy. If a script still fails, it is the");
    console.log("  script making too many calls — the new generate-exams.ts batches");
    console.log("  its writes and retries, so try that first.\n");
  } else if (failed === 0) {
    console.log("  Connection works but is slow. Use the smaller batch options:");
    console.log("    npx tsx prisma/generate-exams.ts fs-pharmacology --paper=1");
    console.log("  and repeat for each paper number.\n");
  } else {
    console.log("  The connection is dropping under sustained use. Two things to try,");
    console.log("  in this order:");
    console.log("    1. Add DIRECT_URL to your .env (see START_HERE).");
    console.log("    2. Generate one paper at a time with --paper=1, --paper=2, etc.\n");
  }

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error("\nUnexpected error:\n", e);
  process.exit(1);
});
