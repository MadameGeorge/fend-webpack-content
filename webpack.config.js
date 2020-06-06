const path = require('path');
const webpack = require('webpack');

module.exports = {
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
	}
};