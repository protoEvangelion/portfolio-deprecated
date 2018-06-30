// const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  const newConfig = config

  if (stage === 'build-javascript') {
    config.loader('typescript', {
      test: /\.tsx?$/,
      loaders: [`babel-loader?${JSON.stringify({ presets: ['babel-preset-env'] })}`, 'ts-loader'],
    })
  }

  return newConfig
}
