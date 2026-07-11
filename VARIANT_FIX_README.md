# Build fix — Button variant "outline" -> "secondary"

TypeScript caught a real error: your Button component has no "outline" variant
(valid ones are primary, secondary, destructive, ghost, link). Several components
I built used variant="outline". All changed to "secondary" (the closest bordered/
quiet style).

## Install
1. Extract over your hello-clinica folder -> Replace all (8 files).
2. Push:
       git add .
       git commit -m "fix: use existing Button variant (secondary) instead of outline"
       git push
