const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
	    {
	      test: /\.(js|jsx)$/,
	      loaders: ['babel-loader'],
	      include: path.join(__dirname, './client')
	    },
			{ 
				test: /\.css$/, 
				loaders: ['style-loader','css-loader'],
				include: path.join(__dirname, './client') 
			},
			{ 
	    	test: /\.(png|jpg)$/,
	    	loaders: ['url-loader'],
	    	options: {
	    		limit: 100000
	    	},
	    	include: path.join(__dirname, './client')
	    }
    ]
  }
}