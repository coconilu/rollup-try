import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.js",
  output: [
    {
      file: "output/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "output/bundle.amd.js",
      format: "amd",
    },
    {
      file: "output/bundle.umd.js",
      format: "umd",
      name: "umd",
    },
    {
      file: "output/bundle.iife.js",
      format: "iife",
      name: "iife",
    },
    {
      file: "output/bundle.es.js",
      format: "es",
    },
    {
      file: "output/bundle.system.js",
      format: "system",
    },
  ],
});
