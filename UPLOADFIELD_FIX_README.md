# Build fix — optional upload fields (string | undefined)

TypeScript error: UploadField expects value: string, but the optional fields
(book cover, book file, resource thumbnail, resource file) are string | undefined.
Added `?? ""` so an empty field passes an empty string. Behaviour is unchanged.

## Install
1. Extract over your hello-clinica folder -> Replace all (2 files).
2. Push:
       git add .
       git commit -m "fix: default optional UploadField values to empty string"
       git push
