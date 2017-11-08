const { css } = require('@webpack-blocks/assets')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const SimpleProgressWebpackPlugin = require('customized-progress-webpack-plugin')

const webpack = require('webpack')

const {
  createConfig,
  match,

  // Feature Blocks
  babel,
  devServer,
  file,

  // Shorthand setters
  addPlugins,
  defineConstants,
  entryPoint,
  env,
  resolve,
  setOutput,
  sourceMaps,
} = require('webpack-blocks')

const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const sourceDir = process.env.SOURCE || 'src'
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

function sassLoader() {
  return (context, { merge }) =>
    merge({
      module: {
        rules: [
          Object.assign(
            {
              test: /\.scss$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[local]-[hash:base64:5]',
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: [sourcePath],
                  },
                },
              ],
            },
            context.match,
          ),
        ],
      },
    })
}

const config = createConfig([
  entryPoint(sourcePath),
  setOutput(`${outputPath}/app.js`),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  babel(),
  sassLoader(),
  css(),
  match(
    [
      '*.gif',
      '*.jpg',
      '*.jpeg',
      '*.png',
      '*.webp',
      '*svg',
      '*woff2',
      '*woff',
      '*ttf',
      '*eot',
    ],
    [file()],
  ),
  resolve({
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  }),
  env('development', [
    devServer({
      historyApiFallback: true, // 404s fallback to index.html
      hot: true,
      port: 3000,
    }),
    sourceMaps(),
    addPlugins([
      new SimpleProgressWebpackPlugin(),
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    addPlugins([
      new SimpleProgressWebpackPlugin(),
      new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
])

module.exports = config
