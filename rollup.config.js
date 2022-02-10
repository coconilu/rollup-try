import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
// import fs from "fs";

export default defineConfig({
  input: "src/index.js",
  external: ["lodash"],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    {
      name: "demo-plugin",
      // buildStart: (inputOptions) => {
      //   console.log(inputOptions);
      // },
      // resolveId: (source, importer, options) => {
      //   console.log(source, importer);
      // },
      // load: (id) => {
      //   console.log("🚀 ~ file: rollup.config.js ~ line 22 ~ id", id);
      // },
      // transform: (code, id) => {
      //   console.log(
      //     "🚀 ~ file: rollup.config.js ~ line 25 ~ (code, id)\n",
      //     code
      //   );
      // },
      shouldTransformCachedModule: ({
        id,
        code,
        ast,
        meta,
        moduleSideEffects,
        syntheticNamedExports,
      }) => {
        console.log("**", {
          id,
          code,
          ast,
          meta,
          moduleSideEffects,
          syntheticNamedExports,
        });
      },
      // moduleParsed: (info) => {
      //   const { code, ...otherInfo } = info;
      //   console.warn("**module parsed info**", otherInfo);
      //   fs.appendFileSync(
      //     "plugin_output/moduleParsed.sh",
      //     JSON.stringify(info, null, 2) + "\n\n"
      //   );
      // },
      resolveDynamicImport: (specifier, importer) => {
        console.log(
          "🚀 ~ file: rollup.config.js ~ line 57 ~ specifier, importer",
          specifier,
          importer
        );
      },
      buildEnd: (error) => {
        console.log("🚀 ~ file: rollup.config.js ~ line 64 ~ error", error);
      },
    },
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
