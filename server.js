// setup
const express = require('express')
const app = express()
const config = require('./webpack.config.dev')
const path = require('path')
const webpack = require('webpack')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const axios = require('axios')

//hot reloading functionality
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(config)

//APIs
const quoteCall = require('./API/quoteCall.js')
const wikiCall = require('./API/wikiCall.js')
const weatherCall = require('./API/weatherCall.js')

//middlewares
app.use(devMiddleware(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}))
	.use(hotMiddleware(compiler))
	.use(favicon(__dirname + '/dist/favicon.ico'))
	.use(bodyParser.json()); 


//routing
app.get('/api/wikisnippets', (req, res) => {
		let term = req.query.TERM
		wikiCall.snippet(res, term)
	})

app.get('/api/quote', (req, res) => {
		quoteCall.random(res)
	})
	
app.get('/api/weather', (req, res) => {
		let city = req.query.TERM
		weatherCall.city(res, city)
	})
	
app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'))
	})

//listener
app.listen(3000, (err) => {
  let details = 'Listening at http://localhost:3000/'
  err ? console.error(err) : console.log(details)
})