import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import url from "rollup-plugin-url";
import alias from "rollup-plugin-alias";
import copy from "copy-webpack-plugin";

import packageJson from "./package.json" assert { type: "json" };

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
        limit: 0,
        include: ["**/*.eot", "**/*.woff", "**/*.woff2", "**/*.ttf"],
        limit: Infinity,
      }),
      terser({
        format: {
          comments: false,
        },
      }),
      copy({
        targets: [{ src: "src/fonts", dest: "dist/fonts" }],
      }),
      alias({
        entries: [
          { find: "@/", replacement: `src` },
          { find: "fonts", replacement: `src/fonts` },
        ],
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import postcss from "rollup-plugin-postcss";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import terser from "@rollup/plugin-terser";
// import alias from "rollup-plugin-alias";
// import url from "rollup-plugin-url";
// import dts from "rollup-plugin-dts";

// import packageJson from "./package.json" assert { type: "json" };

// const bundle = {
//   input: "src/index.ts",
//   output: [
//     {
//       file: packageJson.main,
//       format: "cjs",
//       sourcemap: true,
//     },
//     {
//       file: packageJson.module,
//       format: "esm",
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: "./tsconfig.json" }),
//     postcss(),
//     url({
//       limit: 0,
//       include: ["**/*.eot", "**/*.woff", "**/*.woff2", "**/*.ttf"],
//       limit: Infinity,
//     }),
//     terser({
//       format: {
//         comments: false,
//       },
//     }),
//     alias({
//       entries: [
//         { find: "@/", replacement: `${__dirname}/src` },
//         { find: "fonts", replacement: `${__dirname}/src/fonts` },
//       ],
//     }),
//     dts(),
//   ],
//   external: ["react", "@mui/material"],
// };

// export default bundle;
