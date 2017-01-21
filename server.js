// setup
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const http = require('http')
const url = require('url')
const axios = require('axios')

//hot reloading functionality
const webpack = require('webpack')
const config = require('./webpack.config.dev')
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

app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'))
	})

//listener
app.listen(3000, (err) => {
  let details = 'Listening at http://localhost:3000/'
  err ? console.error(err) : console.log(details)
})
