const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/mainApp'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
				loaders: ['style-loader','css-loader'] 
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