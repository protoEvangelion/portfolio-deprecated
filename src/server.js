// setup
require('babel-register')({
	presets: ['es2015',  'react', 'stage-3'],
})
// require.extensions['.png', '.css', '.svg'] = () => {return}

require('dotenv').config()
const modifyUrl = require('./client/api/apiKey_helper'),
 		 express = require('express'),
 		 app = express(),
 		 path = require('path'),
 		 favicon = require('serve-favicon'),
 		 bodyParser = require('body-parser'),
 		 axios = require('axios')

//middlewares
app.disable('x-powered-by')
	 .use(favicon(path.join(__dirname, './dist/favicon.ico')))
	 .use(bodyParser.json())
	//  .set('view engine', 'ejs')

// NOTE: API Proxy Section
app.get('/api', (req, res) => {

	const makeApiRequest = () => {
		console.log(req.originalUrl)

		if(modifyUrl(req.originalUrl, res) !== undefined) {
			let newUrl = modifyUrl(req.originalUrl)

			axios.get(newUrl)
			 .then(function (response) {
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
		 } else if(process.env.NODE_ENV === 'testing') {
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

	const webpack = require('webpack'),
	     config = require('./webpack.config'),
	     devMiddleware = require('webpack-dev-middleware'),
	     hotMiddleware = require('webpack-hot-middleware'),
	     compiler = webpack(config)

	app.use(devMiddleware(compiler, {
			noInfo: false,
			publicPath: config.output.publicPath,
			stats: {colors: true},
		}))
		.use(hotMiddleware(compiler))

	// const ReactRouter = require('react-router'),
	//  		 routes = require('./client/routes/routes'),
	//  		 React = require('react')

	app.get('*', (req, res) => {
		// console.log('serverRender value', renderReact.serverRender())
		res.sendFile(path.join(__dirname, 'client/index.html'))
		// res.send('index')
	})

	//listener & encryption for local https host
	const https = require('https'),
	     fs = require('fs'),
	     privateKey = fs.readFileSync('sslcert/server.key', 'utf8'),
	     certificate = fs.readFileSync('sslcert/server.crt', 'utf8'),
	     credentials = {key: privateKey, cert: certificate}

	https.createServer(credentials, app).listen(8443, (err) => {
		const details = 'listening on https://localhost:8443'
		err ? console.error(err) : console.log(details)
	})

} else if(!module.parent){
	//NOTE: !module.parent is so that supertest does not reuse the port
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

//NOTE: exporting for tests
module.exports = {app, env: process.env}
