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

