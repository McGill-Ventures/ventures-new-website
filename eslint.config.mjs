import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const ROOT_LAYOUT_ONLY =
  "Import CSS and fonts in src/app/layout.tsx. <Link> prefetch preloads route-level ones on every page that links to the route, where they go unused.";

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
            message: ROOT_LAYOUT_ONLY,
          })),
          patterns: [{ group: ["*.css"], message: ROOT_LAYOUT_ONLY }],
        },
      ],
    },
  },
];

export default eslintConfig;
