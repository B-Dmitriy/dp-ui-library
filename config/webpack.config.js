const path = require('path');

module.exports = {
	entry: {
		path: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
				use: ['ts-loader']
			}
		],
	},
}

console.log(path.resolve(__dirname, 'dist'),);
