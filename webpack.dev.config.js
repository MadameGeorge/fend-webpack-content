const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/client/index.js',
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				enforce: 'pre',
				test: '/\.js$/',
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html'
		}),
		new CleanWebpackPlugin({
			// Simulate the removal of files
			dry: false,
			// Write Logs to Console
			verbose: true,
			// Automatically remove all unused webpack assets on rebuild
			cleanStaleWebpackAssets: false,
			protectWebpackAssets: false 
		})
	]
};