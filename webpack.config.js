const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
	    {
	      test: /\.js?$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src'),
	    },
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader'},
			{ 
	    	test: /\.(png|jpg)$/,
	    	loader: 'url'
	    }
    ]
  }
};