// setup
require('dotenv').config()
const modifyUrl = require('./client/api/apiKey_helper')
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

//encryption for local https host
const https = require('https')
const fs = require('fs')
const privateKey = fs.readFileSync('sslcert/server.key', 'utf8')
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8')
const credentials = {key: privateKey, cert: certificate}

//API Proxy Section

app.get('/api', (req, res) => {

	const makeApiRequest = () => {
		console.log(req.originalUrl)

		if(modifyUrl(req.originalUrl, res) !== undefined) {
			let newUrl = modifyUrl(req.originalUrl)
			console.log('making request', newUrl)
			axios.get(newUrl)
			 .then(function (response) {
				 console.log('new', response)
				 res.status(200).send(response.data)
			 })
			 .catch(function (error) {
				 console.log('Check error log', error)
				 res.status(500).send(error)
			 })
		}

	}

	//NOTE: prevent unauthorized urls from using proxy

	if(process.env.NODE_ENV !== 'development') {
		 if(req.headers.host === 'ryantg.herokuapp.com'){
			 	makeApiRequest()
		 } else {
			 	res.sendStatus(403)
					 .send('You are not authorized to use this proxy')
		 }
	} else {
			makeApiRequest()
	}
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

	//listener
	https.createServer(credentials, app).listen(8443, (err) => {
		const details = 'listening on https://localhost:8443'
		err ? console.error(err) : console.log(details)
	})

} else {
		console.log('Production mode')
		const forceSsl = require('force-ssl-heroku')
		app.use(forceSsl)
			 .use('/dist', express.static(path.join(__dirname, 'dist')))

		app.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, 'client/index.html'))
		})

		//listener
		app.listen(process.env.PORT || 3000, (err) => {
			const details = `Listening at ${process.env.PORT || 3000}/`
		  err ? console.error(err) : console.log(details)
		})
}
