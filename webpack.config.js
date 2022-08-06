const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    webDesign: "./src/web-design.js",
    appDesign: "./src/app-design.js",
    graphicDesign: "./src/graphic-design.js",
    about: "./src/about.js",
    locations: "./src/locations.js",
    contact: "./src/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: { chunks: "all" },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        include: path.resolve(__dirname, "src/styles"),
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            include: path.resolve(__dirname, "src"),
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src/img"),
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      favicon: "src/img/favicon.png",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "web-design.html",
      template: "src/web-design.html",
      favicon: "src/img/favicon.png",
      chunks: ["webDesign"],
    }),
    new HtmlWebpackPlugin({
      filename: "app-design.html",
      template: "src/app-design.html",
      favicon: "src/img/favicon.png",
      chunks: ["appDesign"],
    }),
    new HtmlWebpackPlugin({
      filename: "graphic-design.html",
      template: "src/graphic-design.html",
      favicon: "src/img/favicon.png",
      chunks: ["graphicDesign"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/about.html",
      favicon: "src/img/favicon.png",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "locations.html",
      template: "src/locations.html",
      favicon: "src/img/favicon.png",
      chunks: ["locations"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/contact.html",
      favicon: "src/img/favicon.png",
      chunks: ["contact"],
    }),
    new MiniCssExtractPlugin(),
    require("autoprefixer"),
  ],
};
