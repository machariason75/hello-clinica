# Build fix — PremiumBanner motion className

Framer Motion's types weren't resolving motion.div to a real div (note the
`unknown, unknown` in the error), so `className` was rejected. Fix: motion.div now
carries ONLY animation props; the layout classes, role, and aria-label moved to a
plain wrapper <div> around it. Same look, same animation.

## Install
1. Extract over your hello-clinica folder -> Replace all (1 file).
2. Push:
       git add .
       git commit -m "fix: PremiumBanner motion className typing"
       git push
