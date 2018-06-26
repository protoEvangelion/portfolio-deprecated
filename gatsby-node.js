const path = require('path')

exports.modifyWebpackConfig = ({ config }) => {
  const newConfig = config

  newConfig._config.resolve.alias = {
    ...config._config.resolve.alias,
    components: path.join(__dirname, 'src/components'),
    images: path.join(__dirname, 'src/images'),
  }

  console.log('RESOLVE ====>', newConfig._config.resolve.alias)
  return newConfig
}
