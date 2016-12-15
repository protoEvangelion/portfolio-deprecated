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
	      test: /\.jsx?$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src')
	    },
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{
		    test: /\.(jpe?g|png|gif|svg)$/i,
		    loaders: [
		      'file?hash=sha512&digest=hex&name=[hash].[ext]',
		      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		    ]
		  }
    ]
  }
};