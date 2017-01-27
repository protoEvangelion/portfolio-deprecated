// setup
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const axios = require('axios')

//middlewares
app.use(favicon(__dirname + '/dist/favicon.ico'))
	 .use(bodyParser.json());

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
	// const hotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(config)

	app.use(devMiddleware(compiler, {
		  publicPath: config.output.publicPath
		}))
		// .use(hotMiddleware(compiler))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'))
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
app.listen(process.env.PORT || 3000, (err) => {
  let details = `Listening at http://localhost:${process.env.PORT || 3000}/`
  err ? console.error(err) : console.log(details)
})
