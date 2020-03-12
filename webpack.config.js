const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

module.exports = {
  mode: "development",
  entry: "./src/entry.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: 5501
  },
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true
            }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "postcss.config.js" }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true
            }
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "postcss.config.js" }
            }
          }
        ]
      },
      {
        test: /\.(png | jpeg | svg | gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/pages/index/index.pug",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/theme/img"),
        to: path.resolve(__dirname, "dist/assets/img")
      },
      {
        from: path.resolve(__dirname, "src/theme/fonts"),
        to: path.resolve(__dirname, "dist/assets/fonts")
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css"
    })
  ]
};
