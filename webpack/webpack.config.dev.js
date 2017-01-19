var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
    path.resolve(__dirname, 'hotReload')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/'
  },
	module: {
    rules: [
	    {
	      test: /\.js$/,
	      use: 'babel-loader',
				exclude: /node_modules/
	    },
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
	    	test: /\.(jpe?g|png|gif|svg)$/,
	    	use: [
					{
						loader: 'url-loader',
						options: { limit: 40000}
					},
					'image-webpack-loader'
				]
	    }
    ]
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
		new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
  ],
}

var VENDOR_LIBS = [
	'animate.css',
	'axios',
	'babel-core',
	'babel-eslint',
	'babel-loader',
	'babel-plugin-react-transform',
	'babel-plugin-transform-es2015-parameters',
	'babel-plugin-transform-object-rest-spread',
	'babel-plugin-transform-react-display-name',
	'babel-polyfill',
	'babel-preset-env',
	'babel-preset-es2015',
	'babel-preset-react',
	'babel-preset-stage-0',
	'body-parser',
	'css-loader',
	'express',
	'file-loader',
	'history',
	'image-webpack-loader',
	'lodash',
	'radium',
	'react',
	'react-bootstrap',
	'react-dom',
	'react-google-maps',
	'react-redux',
	'react-router',
	'react-router-redux',
	'react-social',
	'react-sparklines',
	'react-transform-hmr',
	'redux',
	'redux-promise',
	'serve-favicon',
	'style-loader',
	'styled-components',
	'url-loader',
	'webpack',
	'webpack-dev-middleware',
	'webpack-hot-middleware'
];
