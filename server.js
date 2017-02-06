// setup
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const axios = require('axios')

//middlewares
app.disable('x-powered-by')
	 .use(favicon(path.join(__dirname, './dist/favicon.ico')))
	 .use(bodyParser.json())

//encryption
const http = require('http')
const https = require('https')
const fs = require('fs')
const privateKey = fs.readFileSync('sslcert/server.key', 'utf8')
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8')
const credentials = {key: privateKey, cert: certificate}

//API Proxy Section
app.get('/api', (req, res) => {
		const newUrl = req.originalUrl.slice(9)
		console.log('here is the request', newUrl)
		axios.get(newUrl)
			.then(function (response) {
		    console.log(response.data)
		    res.send(response.data)
		  })
		  .catch(function (error) {
		    console.log(error)
		  })
})

//MAKE SURE ALL ROUTING & API LOGIC GOES ABOVE THIS LINE

if(process.env.NODE_ENV == 'development') {
	console.log('Development mode')
	const webpack = require('webpack')
	const config = require('./webpack.config')
	const devMiddleware = require('webpack-dev-middleware')
	const hotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(config)

	app.use(devMiddleware(compiler, {
			noInfo: false,
			publicPath: config.output.publicPath,
			stats: {colors: true},
		}))
		.use(hotMiddleware(compiler))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/index.html'))
	})

	https.createServer(credentials, app).listen(8443, () => {
		console.log('listening on https://localhost:8443')
	})

} else {
		console.log('Production mode')
		const forceSsl = require('force-ssl-heroku')
		app.use(forceSsl)
			 .use('/dist', express.static(path.join(__dirname, 'dist')))

		app.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, 'client/index.html'))
		})
}

//listener
app.listen(3000, () => console.log('listening on port 3000'))
