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
const webpackConfig = require('./webpack.config.dev')
const compiler = webpack(webpackConfig)

//APIs
const quoteCall = require('./API/quoteCall.js')
const wikiCall = require('./API/wikiCall.js')
const weatherCall = require('./API/weatherCall.js')

//middlewares
app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}))
	.use(require('webpack-hot-middleware')(compiler))
	.use(favicon(__dirname + '/dist/favicon.ico'))
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

app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, './index.html'))
	})

//listener
app.listen(3000, (err) => {
  let details = 'Listening at http://localhost:3000/'
  err ? console.error(err) : console.log(details)
})
