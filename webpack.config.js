var path = require('path');
var webpack = require('webpack');
const HappyPack = require('happypack');
const WebpackShellPlugin = require('webpack-shell-plugin');

let development = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?reload=true',
		'./client/index',
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	jsLoader: {
		test: /\.js$/,
		use: 'babel-loader',
		exclude: /node_modules/
	},
}

let production = {
	entry: './client/index',
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
		new webpack.NoEmitOnErrorsPlugin(),
		new WebpackShellPlugin({onBuildStart:['echo "Webpack Production mode"'], onBuildEnd:['node server.js']}),
		new HappyPack({
			loaders: [{
				path: 'babel-loader',
				query: {
					plugins: [
						'transform-react-constant-elements',
						'transform-react-inline-elements',
						'transform-react-remove-prop-types',
						'lodash'
					],
					presets: ["react", ["es2015", {"modules": false}], "stage-3"]
				}
			}],
			threads: 5
		})
	],
	jsLoader: {
    test: /\.js$/,
    use: 'happypack/loader',
		exclude: /node_modules/
  },
}

let configuration = process.env.NODE_ENV === 'development'
	? development
	: production

console.log(`Webpack starting using: ${process.env.NODE_ENV === 'development' ? 'development' : 'production'} config :)`)

module.exports = {
	entry: configuration.entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/dist/'
  },
	module: {
    rules: [
			configuration.jsLoader,
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
	    	test: /\.(jpeg|jpg|png|gif|svg|wav|mp3)$/,
	    	use: [
					{
						loader: 'url-loader',
						options: { limit: 40000}
					},
					'image-webpack-loader'
				]
	    },
      {
        test: /\.(mp4|webm)$/,
        use: 'file-loader'
      },
			{
				test: /\.json$/,
				use: 'json-loader',
				exclude: /node_modules/
			}
    ]
  },
	resolve: {
		alias: {
			soundmanager2: 'soundmanager2/script/soundmanager2-nodebug-jsmin.js'
		},
	},
  plugins: configuration.plugins,
}
