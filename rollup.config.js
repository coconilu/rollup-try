import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  input: "src/index.js",
  external: ["lodash"],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
  ],
  output: [
    {
      format: "cjs",
    },
    {
      format: "amd",
    },
    // {
    //   file: "output/bundle.umd.js",
    //   format: "umd",
    //   name: "umd",
    // },
    // {
    //   file: "output/bundle.iife.js",
    //   format: "iife",
    //   name: "iife",
    // },
    {
      format: "es",
    },
    {
      format: "system",
    },
  ].map((out) => {
    return {
      ...out,
      globals: {
        lodash: "lodash",
      },
      dir: `output/${out.format}`,
    };
  }),
});
