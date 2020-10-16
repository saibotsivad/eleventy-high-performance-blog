import { terser } from "rollup-plugin-terser";

export default {
  input: "lib/main.js",
  output: [
    {
      file: "src/js/min.js",
      format: "iife",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
