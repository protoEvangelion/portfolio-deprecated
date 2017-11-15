const baseConfig = require('../../webpack.config')

module.exports = storybookBaseConfig => {
  const mergedConfig = Object.assign({}, storybookBaseConfig, {
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      modules: baseConfig.resolve.modules,
    }),
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(
        baseConfig.module.rules.slice(1),
      ),
    }),
  })

  return mergedConfig
}
