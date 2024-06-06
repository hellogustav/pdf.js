/* eslint-disable import/no-commonjs */

const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./main.mjs",
    "pdf.worker": "pdfjs-dist/build/pdf.worker.mjs",
  },
  mode: "none",
  output: {
    path: path.join(__dirname, "../../build/webpack"),
    publicPath: "../../build/webpack/",
    filename: "[name].bundle.js",
  },
  resolve: {
    alias: {
      "fluent-bundle": path.resolve(
        __dirname,
        "../node_modules/@fluent/bundle/esm/index.js"
      ),
      "fluent-dom": path.resolve(
        __dirname,
        "../node_modules/@fluent/dom/esm/index.js"
      ),
    }
  }
};
