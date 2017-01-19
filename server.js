// setup
const express = require('express')
const app = express()

const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const url = require('url')
const axios = require('axios')

//middlewares
app.use(favicon(__dirname + '/dist/favicon.ico'))
	 .use(bodyParser.json())
	 .use(express.static('dist'))

//Proxy Server for making requests from client
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

app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'))
})

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
	  app.use(express.static('dist'));
	  app.get('*', (req, res) => {
	    res.sendFile(path.join(__dirname, 'dist/index.html'));
	  });
}

//listener
app.listen(process.env.PORT || 3000, (err) => {
	let port = process.env.PORT || 3000
	let details = `Listening at http://localhost:${port}/`
  err ? console.error(err) : console.log(details)
})
