import { ProjectHeader } from 'components/organisms'
import React, { Fragment } from 'react'

import forceImg from 'images/force.png'
import gameOfLifeImg from 'images/gameOfLife.png'
import tradeshowImg from 'images/tradeshow.png'
import weatherImg from 'images/weather.png'

const Index = () => (
	<Fragment>
		<ProjectHeader
			absolute
			image={tradeshowImg}
			header="A blazingly fast static site built upon stable modern technologies like React and Firebase with a goal to simplify the trade show management process"
			linkText="Live Tradeshow App"
			href="https://tradeshow-floorplan.firebaseapp.com/lb/"
		/>

		<ProjectHeader
			image={gameOfLifeImg}
			header="A cool collection consisting of simple game projects and utilities like a Markdown previewer..."
			linkText="Gaming & Utility Projects"
			href="utilityApps"
			flip
		/>

		<ProjectHeader
			image={weatherImg}
			header="An interesting group of API projects that span from a Pinterest recipe box to syndicating the coolest channels on Twitch..."
			linkText="API Projects"
			href="apiApps"
		/>

		<ProjectHeader
			image={forceImg}
			header="A dynamic collection of D3 projects implementing cutting edge data visualization technology..."
			linkText="D3 Projects"
			href="d3Apps"
			flip
		/>
	</Fragment>
)

export default Index
