const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    resolve(__dirname, 'hotReload'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: '/',
  },
  context: resolve(__dirname, '../src'),
  devtool: 'inline-source-map',
  module: {
    rules: [
	    {
	      test: /\.(js|jsx)$/,
	      include: resolve(__dirname, '../src'),
	      use: 'babel-loader',
	    },
			{ 
				test: /\.css$/, 
				use: 'style-loader!css-loader'},
			{ 
	    	test: /\.(png|jpg)$/,
	    	use: 'url'
	    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}