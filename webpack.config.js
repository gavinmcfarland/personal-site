const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MarkoPlugin = require("@marko/webpack/plugin").default;
const CSSExtractPlugin = require("mini-css-extract-plugin");
const SpawnServerPlugin = require("spawn-server-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const {
	NODE_ENV
} = process.env;
const isProd = NODE_ENV === "production";
const isDev = !isProd;
const markoPlugin = new MarkoPlugin();
const spawnedServer = isDev && new SpawnServerPlugin();

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
			path: path.join(__dirname, "public/client")
		},
		devServer: isDev ? {
			overlay: true,
			stats: "minimal",
			contentBase: false,
			...spawnedServer.devServerConfig
		} : undefined,
		plugins: [
			new webpack.DefinePlugin({
				"process.browser": true
			}),
			new CSSExtractPlugin({
				filename: "[name].[contenthash:8].css"
			}),
			new CopyWebpackPlugin([{
				from: path.join(__dirname, "content/assets"), //Will resolve to RepoDir/src/assets
				to: "../client" //Copies all files from above dest to public/assets
			}, ]),
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
			path: path.join(__dirname, "public/server")
		},
		plugins: [
			new webpack.DefinePlugin({
				"process.browser": undefined,
				"process.env.BUNDLE": true
			}),
			new webpack.BannerPlugin({
				banner: 'require("source-map-support").install();',
				raw: true
			}),
			new CSSExtractPlugin({
				filename: "[name].[contenthash:8].css"
			}),
			new CopyWebpackPlugin([{
				from: path.join(__dirname, "content/assets"), //Will resolve to RepoDir/src/assets
				to: "../client" //Copies all files from above dest to public/assets
			}, ]),
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
					test: /\.(css)$/,
					use: [CSSExtractPlugin.loader, "css-loader", 'postcss-loader']
				},
				// {
				//   test: /\.svg/,
				//   loader: "svg-url-loader"
				// },
				{
					test: /\.(jpg|jpeg|gif|png|svg)$/,
					loader: "file-loader",
					options: {
						// File assets from server & browser compiler output to client folder.
						publicPath: '/static/',
						outputPath: "../client"
					}
				}
			]
		},
		plugins: [...config.plugins,
			isProd && new CleanWebpackPlugin()
		].filter(Boolean)
	};
}
