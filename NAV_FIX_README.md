# Fix — missing Send / UserCog icon imports in admin nav

The two new nav entries (Send Newsletters, Admin Account) used icons that were
never added to the lucide-react import. Added them.

## Install
1. Extract the CONTENTS into your project -> Replace all (1 file: lib/admin/nav.ts).
2. npx tsc --noEmit     <- expect NO errors
   npm run dev
3. git add .
   git commit -m "emails, newsletters, unsubscribe, account management"
   git push
