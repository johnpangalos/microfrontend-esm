import sucrase from "@rollup/plugin-sucrase";

import pkg from "./package.json";

const config = {
  input: "./src/main.tsx",
  output: [
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    sucrase({
      exclude: ["node_modules/**"],
      production: true,
      transforms: ["jsx", "typescript"],
    }),
  ],
};

export default config;
