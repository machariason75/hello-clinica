# Fix — duplicate NewsletterCampaign / PasswordResetToken models

Your schema already had these two models (from the earlier email work), and my
pack appended a second copy of each, so `prisma db push` refused to run.
This schema.prisma keeps ONE of each (identical fields either way) and preserves
the new unsubscribe fields (unsubscribed, unsubToken) and the Student.resetTokens
relation.

## Install
1. Extract the CONTENTS into your project -> Replace all (1 file: prisma/schema.prisma).
2. npx prisma db push        <- should now succeed
3. npx tsc --noEmit          <- expect no errors
   npm run dev
4. git add .
   git commit -m "emails, newsletters, unsubscribe, account management"
   git push
