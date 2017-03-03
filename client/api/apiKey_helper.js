const URL = require('url-parse')
const querystring = require('querystring')

let modifyUrl = (originalUrl) => {
	let url = new URL(originalUrl)
	const queries = querystring.parse(url.query)
	console.log('queries', url.query, queries)

	if(url.query.includes('api.stlouisfed.org')) {
			console.log('returning modified', url)
			return url.query.slice(5) + process.env.GDPAPIKEY

	} else if(queries.mailgunMessage) {

			const api_key = process.env.MAILGUN
			const Mailgun = require('mailgun-js')
			const domain = 'sandboxb02a583d258841ec936b5085c6ca7163.mailgun.org'
			const from_who = 'ryantgarant@gmail.com'

			var mailgun = new Mailgun({apiKey: api_key, domain: domain})

	    var data = {
	      from: from_who,
	      to: 'ryantgarant@gmail.com',
	      subject: 'Hello from Mailgun',
	      html: queries.mailgunMessage
	    }

	    //Invokes the method to send emails given the above data with the helper library
	    mailgun.messages().send(data, function (err, body) {
	        //If there is an error, render the error page
	        if (err) {
	            console.log("got an error: ", err);
	        }
	        //Else we can greet    and leave
	        else {
	            //Here "submitted.jade" is the view file for this landing page
	            //We pass the variable "email" from the url parameter in an object rendered by Jade

	            console.log(body);
	        }
	    });

	} else {
			console.log('parsed url', url)
			return url.query.slice(5)
	}
}

module.exports = modifyUrl
