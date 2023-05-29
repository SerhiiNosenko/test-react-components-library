import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import alias from "rollup-plugin-alias";
import url from "rollup-plugin-url";

import packageJson from "./package.json" assert { type: "json" };

// Use the require statement with the .default property to import dts
const dts = require("rollup-plugin-dts").default;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      url({
        limit: 0, // Always emit files as separate assets
        include: ["**/*.eot", "**/*.woff", "**/*.woff2", "**/*.ttf"], // Include font files
        limit: Infinity,
        // fileName: "[name][extname]", // Preserve the original file extension
      }),
      terser({
        format: {
          comments: false,
        },
        include: /^((?!TAppIcon).)*$/, // Exclude files or code containing 'TAppIcon'
      }),
      alias({
        entries: [
          { find: "@/", replacement: `${__dirname}/src` },
          { find: "fonts", replacement: `${__dirname}/src/fonts` },
        ],
      }),
      dts(),
    ],
    external: ["react", "@mui/material"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
