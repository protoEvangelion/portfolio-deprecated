const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config.dev');

const app = express();

const axios = require('axios')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

//hot reloading functionality
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(hotMiddleware(compiler));

// server favicon so you don't get annoying favicon GET requests
app.use(favicon(__dirname + '/dist/favicon.ico'))

//simplify body parsing
app.use(bodyParser.json())

//handle post from wiki component API call to wikipedia
app.get('/api/wikisnippets', function (req, res) {
	let term = req.query.TERM
	console.log('supposed text', term)
	let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&utf8=&format=json`

	axios.get(url)
		.then(function(resp) {
			res.send(resp.data.query.search)
		})
		.catch(function(err) {
			console.log(err)
		})
})

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
	console.log('hello', req.path)
});

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});