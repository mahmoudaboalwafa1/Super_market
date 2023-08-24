const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    compress: true,
    hot: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.(png|jpe?g|webp|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new miniCssExtractPlugin({ filename: "./public/css/style.css" }),
  ],
};
