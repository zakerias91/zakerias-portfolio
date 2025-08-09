import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Start with Next's core-web-vitals preset, then add our overrides
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // or narrow to specific folders/files
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
