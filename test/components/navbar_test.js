import { renderComponent, expect } from '../test_helper'
import Navbar from '../../client/components/Main/Header/Navbar'

describe('Navbar', () => {
	it('shows the correct nav tabs', () => {
		expect(renderComponent(Navbar)).to.contain('About')
		expect(renderComponent(Navbar)).to.contain('Projects')
		expect(renderComponent(Navbar)).to.contain('Contact')
	})
})
