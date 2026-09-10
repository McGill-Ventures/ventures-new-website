This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The website is live at: https://www.mcgillvc.ca/

## Getting Started

This project uses **Node 24** (see `.nvmrc`) and **pnpm** (see `packageManager` in `package.json`).

pnpm ships with Node via corepack, so you do not need to install it separately:

```bash
corepack enable
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Other scripts:

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```

`pnpm.onlyBuiltDependencies` in `package.json` allows `unrs-resolver` to run its
install script. pnpm blocks install scripts by default. That one links a
platform-native binary for the ESLint TypeScript resolver, and installs fail
without it.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Animation

All motion goes through `src/lib/motion.ts`. Import the shared tokens rather
than writing per-component durations and curves:

```tsx
import { motion } from "motion/react";
import { fadeUp, hoverLift, revealOnScroll } from "@/lib/motion";

<motion.div variants={fadeUp} {...revealOnScroll} {...hoverLift} />
```

- `EASE` / `DURATION` / `transition` — the one curve and the three durations.
- `fadeUp` — the entrance variant.
- `revealOnScroll` — reveals on scroll into view, once.
- `hoverLift` — the Motion version of the `.hover-lift` class.

Two rules:

1. **Never put a CSS class with `transition: all` on a motion component.** It
   intercepts the inline transform Motion writes, double-animating it and
   silently defeating reduced motion. `.hover-lift` and `.hover-scale` both do
   this; use `hoverLift` instead.
2. **Do not add new `@keyframes` to `globals.css`.** The existing ones stay
   until the components using them are converted.

`MotionProvider` in the root layout sets `reducedMotion="user"`. Motion animates
through JS, so the `prefers-reduced-motion` block in `globals.css` does not
reach it.
