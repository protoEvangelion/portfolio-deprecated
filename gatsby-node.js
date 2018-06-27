const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  const newConfig = config

  if (stage === 'build-javascript') {
    config.loader('typescript', {
      test: /\.tsx?$/,
      loaders: [`babel-loader?${JSON.stringify({ presets: ['babel-preset-env'] })}`, 'ts-loader'],
    })
  }

  newConfig._config.resolve.alias = {
    ...config._config.resolve.alias,
    components: path.join(__dirname, 'src/components'),
    images: path.join(__dirname, 'src/images'),
  }

  return newConfig
}
