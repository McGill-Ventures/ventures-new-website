import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const PRELOAD_WHY =
  "<Link> prefetch preloads route-level ones on every page that links to the route, where they go unused.";

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "_reference/**",
      ".claude/**",
    ],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/app/layout.tsx"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: ["next/font/google", "next/font/local"].map((name) => ({
            name,
            message: `Load fonts in src/app/layout.tsx. ${PRELOAD_WHY}`,
          })),
          patterns: [
            {
              group: ["*.css"],
              message: `@import CSS from src/app/globals.css, with prefixed class names instead of CSS Modules. ${PRELOAD_WHY}`,
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
