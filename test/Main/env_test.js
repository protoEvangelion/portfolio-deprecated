import {expect} from '../test_helper'

describe('Checking for correct env variables', () => {
	it('checks GDP API Key existence', () => {
		expect(process.env.GDPAPIKEY).to.exist
	})
	it('checks MAILGUN API Key existence', () => {
		expect(process.env.MAILGUN).to.exist
	})
	it('checks Google reCaptcha API Key existence', () => {
		expect(process.env.RECAPTCHA).to.exist
	})
})
