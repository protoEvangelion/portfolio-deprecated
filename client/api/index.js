
const host = process.env.NODE_ENV !== 'development ' ? 'https://mysterious-plains-15364.herokuapp.com' : 'http://localhost:3000'
const proxyUrl = `${host}/api?url=`

console.log('env', process.env.NODE_ENV)

export default proxyUrl
