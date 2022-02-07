import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "src/index.js",
  // external: ["lodash"],
  plugins: [commonjs(), nodeResolve()],
  output: [
    {
      file: "output/bundle.cjs.js",
      format: "cjs",
      globals: {
        lodash: "lodash",
      },
    },
    {
      file: "output/bundle.amd.js",
      format: "amd",
      globals: {
        lodash: "lodash",
      },
    },
    {
      file: "output/bundle.umd.js",
      format: "umd",
      name: "umd",
      globals: {
        lodash: "lodash",
      },
    },
    {
      file: "output/bundle.iife.js",
      format: "iife",
      name: "iife",
      globals: {
        lodash: "lodash",
      },
    },
    {
      file: "output/bundle.es.js",
      format: "es",
      globals: {
        lodash: "lodash",
      },
    },
    {
      file: "output/bundle.system.js",
      format: "system",
      globals: {
        lodash: "lodash",
      },
    },
  ],
});
