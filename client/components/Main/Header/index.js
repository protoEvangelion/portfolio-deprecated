import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
import Banner from './Banner'

import './ihover.css'

const Header = () => {
	return (
		<div>
			<Navbar />
			<Banner />
		</div>
	)
}

export default Header
