// setup
const express = require('express')
const app = express()

const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const http = require('http')
const url = require('url')
const axios = require('axios')

//APIs
const quoteCall = require('./API/quoteCall.js')
const wikiCall = require('./API/wikiCall.js')
const weatherCall = require('./API/weatherCall.js')

//middlewares
app.use(favicon(__dirname + '/dist/favicon.ico'))
	 .use(bodyParser.json())

//routing
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

//Webpack hot reloading NOT PRODUCTION
if(process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack')
	const webpackConfig = require('./webpack/webpack.config.dev')
	const compiler = webpack(webpackConfig)
	app.use(require('webpack-dev-middleware')(compiler, {
		 noInfo: true,
		 publicPath: webpackConfig.output.publicPath
	 }))
	app.use(require('webpack-hot-middleware')(compiler))
} else {
//Production no webpack
		app.use(express.static('dist'))
		app.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, 'dist/index.html'))
		})
}

//listener
app.listen(process.env.PORT || 3000, (err) => {
	let port = process.env.PORT || 3000
	let details = `Listening at http://localhost:${port}/`
  err ? console.error(err) : console.log(details)
})
