/**
 * Generate a bcrypt hash for an admin password.
 *
 * Usage:
 *   node scripts/hash-password.mjs "YourStrongPassword123!"
 *
 * Copy the printed hash into ADMIN_PASSWORD_HASH in your .env, then run
 * `npm run db:seed`. Never commit the plaintext password or the .env file.
 */
import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error('Provide a password: node scripts/hash-password.mjs "YourPassword"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
console.log("\nADMIN_PASSWORD_HASH=" + hash + "\n");
