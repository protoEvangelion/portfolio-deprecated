const { resolve } = require('path')
const webpack = require('webpack')

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
  devtool: 'source-map',
  module: {
    rules: [
	    {
	      test: /\.(js|jsx)$/,
	      include: [resolve(__dirname, '../src'),resolve(__dirname)],
	      use: 'babel-loader',
	    },
			{ 
				test: /\.css$/, 
				loaders: [
          'style-loader',
          'css-loader',
        ] 
			},
			{ 
	    	test: /\.(png|jpg)$/,
	    	use: 'url-loader'
	    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}