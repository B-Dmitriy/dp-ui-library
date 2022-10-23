const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		path: './src/index.tsx',
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: "[name].[contenthash].js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		port: 8080,
		
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
};
