import { env } from '../../server'
import { expect } from 'chai'

describe('Checking for correct env variables', () => {
	it('checks GDP API Key existence', () => {
		expect(env.GDPAPIKEY).to.exist
	})
	it('checks MAILGUN API Key existence', () => {
		expect(env.MAILGUN).to.exist
	})
	it('checks Google reCaptcha API Key existence', () => {
		expect(env.RECAPTCHA).to.exist
	})
})
