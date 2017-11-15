// https://github.com/diegohaz/arc/wiki/Actions
const req = require.context('.', true, /\.\/.+\/action\.js$/)

req.keys().forEach(key => {
  const actions = req(key)

  Object.keys(actions).forEach(name => {
    module.exports[name] = actions[name]
  })
})
