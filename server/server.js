// setup
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const axios = require('axios')

//middlewares
app.disable('x-powered-by')
app.use(favicon(path.join(__dirname, '../dist/favicon.ico')))
app.use(bodyParser.json());

//encryption
const http = require('http')
const https = require('https')
const fs = require('fs')
const privateKey = fs.readFileSync('server/sslcert/server.key', 'utf8')
const certificate = fs.readFileSync('server/sslcert/server.crt', 'utf8')
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

if(process.env.NODE_ENV == 'development ') {
	console.log('Development mode')

	const webpack = require('webpack')
	const config = require('./webpack.config')
	const devMiddleware = require('webpack-dev-middleware')
	const hotMiddleware = require('webpack-hot-middleware')
	// const hotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(config)

	app.use(devMiddleware(compiler, {
			noInfo: false,
			publicPath: config.output.publicPath,
			stats: {colors: true},
		}))
		.use(hotMiddleware(compiler))
		.use("/client", express.static(path.join(__dirname, 'client')))

	app.get('*', (req, res) => {
		console.log(path.join(__dirname, '../client/index.html'))
		res.sendFile(path.join(__dirname, '../client/index.html'))
	})

} else {
		console.log('Production mode')

		const forceSsl = require('force-ssl-heroku')
		app.use(forceSsl)
			 .use("/dist", express.static(path.join(__dirname, 'dist')))

		app.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, 'index.html'))
		})
}

//listener
http.createServer(app).listen(3000)
https.createServer(credentials, app).listen(8443)
