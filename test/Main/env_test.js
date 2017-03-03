import {expect} from '../test_helper'

describe('Checking for correct env variables', () => {
	it('checks GDP API Key existence', () => {
		expect(process.env.GDPAPIKEY).to.exist
	})
})
