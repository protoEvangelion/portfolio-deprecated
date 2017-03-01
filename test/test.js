const assert = require('assert')
describe('Array', () => {
	it('should return -1 when the val is not present', () => {
		assert.equal(-1, [1,2,3].indexOf(4))
	})
})
