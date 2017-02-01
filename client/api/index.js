
const host = process.env.NODE_ENV !== 'development' ? 'https://ryantg.herokuapp.com' : 'https://localhost:8443'
const proxyUrl = `${host}/api?url=`

console.log('env', process.env.NODE_ENV)

export default proxyUrl
