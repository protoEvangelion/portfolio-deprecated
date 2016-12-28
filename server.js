const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack/webpack.config');

const app = express();
const compiler = webpack(config);
const axios = require('axios')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(bodyParser.json())

app.post('/api/wikisnippets', function (req, res) {
	let text = req.body.text
	let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${text}&utf8=&format=json`
	axios.get(url)
		.then(function(resp) {
			console.log(resp.data)
		})
		.catch(function(err) {
			console.log(err)
		})

	res.send('Thank you')
})

// app.get('/wikiViewer', function (req, res) {
// 	let text = req.params('text')
// 	console.log('Should show up below')

// })

app.get('*', function (req, res) {
  if(req.path !== '/wikiViewer') {
  	res.sendFile(path.join(__dirname, 'index.html'));
  	console.log('hello', req.path)
  }
});

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});