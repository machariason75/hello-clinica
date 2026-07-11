# Drop D fix — duplicate packageSchema

Your codebase already had a `packageSchema`, and my Drop D append added a second
one, which broke the build. This corrected content-schemas.ts keeps a single
packageSchema (now including an optional `sortOrder`), so it works with the
Packages admin.

## Install
1. Extract over your hello-clinica folder -> Replace all (1 file).
2. npm run dev   (should compile now)
3. Push:
       git add .
       git commit -m "fix: duplicate packageSchema"
       git push
