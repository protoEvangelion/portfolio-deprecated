const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    resolve(__dirname, 'hotReload'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: 'http://localhost:3000/public',
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
	    {
	      test: /\.(js|jsx)$/,
	      include: [resolve(__dirname, '../src'),resolve(__dirname)],
	      use: 'babel-loader',
	    },
			{ 
				test: /\.css$/, 
				use: ['style-loader','css-loader'] 
			},
			{ 
	    	test: /\.(png|jpg)$/,
	    	use: 'url-loader',
	    	options: {
	    		limit: 100000
	    	},
	    	include: resolve(__dirname, '../src')
	    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}