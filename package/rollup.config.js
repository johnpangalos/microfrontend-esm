import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import jsx from "acorn-jsx";
import resolve from "@rollup/plugin-node-resolve";

const config = {
  input: "./src/main.tsx",
  output: [
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    typescript({ jsx: "react", target: "ESNext", module: "ESNEXT" }),
  ],
};

export default config;
