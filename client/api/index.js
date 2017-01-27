const host = process.env.NODE_ENV === 'production' ? 'https://mysterious-plains-15364.herokuapp.com' : 'http://localhost:3000'
const proxyUrl = `${host}/api?url=`

export default proxyUrl
