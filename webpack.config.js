const path = require("path");
const webpack = require("webpack");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MarkoPlugin = require("@marko/webpack/plugin").default;
const CSSExtractPlugin = require("mini-css-extract-plugin");
const SpawnServerPlugin = require("spawn-server-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const {
  NODE_ENV
} = process.env;
const isProd = NODE_ENV === "production";
const isDev = !isProd;
const markoPlugin = new MarkoPlugin();
const spawnedServer = isDev && new SpawnServerPlugin();
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  compiler({
    name: "Client",
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: 3
      }
    },
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.join(__dirname, "dist/client")
    },
    devServer: isDev ? {
      overlay: true,
      stats: "minimal",
      contentBase: false,
      ...spawnedServer.devServerConfig
    } : undefined,
    plugins: [
      new webpack.DefinePlugin({
        "process.browser": true,
      }),
      new CSSExtractPlugin({
        filename: "[name].[contenthash:8].css"
      }),

      // new PrerenderSPAPlugin({
      //   // Required - The path to the webpack-outputted app to prerender.
      //   staticDir: path.join(__dirname, "dist/client"),
      //   // Required - Routes to render.
      //   routes: ['/'],
      // }),
      isProd && new OptimizeCssAssetsPlugin(),
      markoPlugin.browser
    ]
  }),
  compiler({
    name: "Server",
    target: "async-node",
    externals: [/^[^./!]/], // excludes node_modules
    optimization: {
      minimize: false
    },
    output: {
      libraryTarget: "commonjs2",
      path: path.join(__dirname, "dist/server")
    },
    plugins: [
      // Trying to pass variables that the template needs. Where do I get $__MARKO_MANIFEST__$ from?
      new webpack.DefinePlugin({
        "process.browser": undefined,
        "process.env.BUNDLE": true,
        'process.env': JSON.stringify(process.env),
        '$__MARKO_MANIFEST__$': true
      }),
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true
      }),
      new CSSExtractPlugin({
        filename: "[name].[contenthash:8].css"
      }),
      // Can't get variables to be available to the template
      new HtmlWebpackPlugin({
        inject: false,
        template: path.resolve(__dirname, 'src/pages/home/index.js'),
        filename: path.resolve(__dirname, 'dist/index.html')
      }),
      // new HtmlWebpackPlugin(),
      // new PrerenderSPAPlugin({
      //   // Required - The path to the webpack-outputted app to prerender.
      //   staticDir: path.join(__dirname, "dist/client"),
      //   // Required - Routes to render.
      //   routes: ['/'],
      // }),
      isDev && spawnedServer,
      markoPlugin.server
    ]
  })
];

// Shared config for both server and client compilers.
function compiler(config) {
  return {
    ...config,
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "inline-source-map",
    output: {
      publicPath: "/static/",
      ...config.output
    },
    resolve: {
      extensions: [".js", ".json", ".marko"]
    },
    module: {
      rules: [{
          test: /\.marko$/,
          loader: "@marko/webpack/loader"
        },
        {
          test: /\.(less|css)$/,
          use: [CSSExtractPlugin.loader, "css-loader", "less-loader"]
        },
        {
          test: /\.svg/,
          loader: "svg-url-loader"
        },
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          loader: "file-loader",
          options: {
            // File assets from server & browser compiler output to client folder.
            outputPath: "../client"
          }
        }
      ]
    },
    plugins: [...config.plugins, isProd && new CleanWebpackPlugin()].filter(Boolean)
  };
}