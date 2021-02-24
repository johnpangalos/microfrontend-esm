import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import jsx from "acorn-jsx";
import replace from "@rollup/plugin-replace";

const config = {
  input: "./src/main.tsx",
  output: [
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    replace({
      react: "'https://cdn.skypack.dev/react'",
      delimiters: ["'", "'"],
    }),
    typescript({
      allowSyntheticDefaultImports: true,
      jsx: "react",
      target: "ESNext",
      module: "ESNEXT",
    }),
  ],
};

export default config;
