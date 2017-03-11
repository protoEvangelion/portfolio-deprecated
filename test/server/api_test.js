import { app, env } from '../../server'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('The express app', () => {
	it('handles a GET request to /api', (done) => {
		const testUrl = 'http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en'
		chai.request(app.listen())
			.get('/api?url=' + testUrl)
			.end((err, res) => {
				expect(err).to.be.null
				expect(res).to.have.status(200)
				done()
			})
	})
})
