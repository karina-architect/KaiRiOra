import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextVitals = require("eslint-config-next/core-web-vitals");

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "coverage/**"],
  },
  ...(Array.isArray(nextVitals) ? nextVitals : [nextVitals]),
];

export default config;
