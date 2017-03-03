import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: Main site stuff
import App from '../components/Main/App.js'
import Home from '../components/Main/Home'
import Privacy from '../components/Main/Privacy'
import NotFound from '../components/Main/NotFound'
import AllProjects from '../components/Main/Header/AllProjects'
import About from '../components/Main/About'
import Contact from '../components/Main/Contact'

// NOTE: Front End Projects
import Wiki from '../components/FrontEndProjects/Wiki'
import Quote from '../components/FrontEndProjects/Quote'
import Weather from '../components/FrontEndProjects/Weather'
import Twitch from '../components/FrontEndProjects/Twitch'
import Tic from '../components/FrontEndProjects/Tic'
import Calc from '../components/FrontEndProjects/Calc'
import Pomodoro from '../components/FrontEndProjects/Pomodoro'
import Simon from '../components/FrontEndProjects/Simon'
import Markdown from '../components/FrontEndProjects/Markdown'
import Leaderboard from '../components/FrontEndProjects/Leaderboard'
import RecipeBox from '../components/FrontEndProjects/RecipeBox'
import GameOfLife from '../components/FrontEndProjects/GameOfLife'
import YoutubeViewer from '../components/FrontEndProjects/YoutubeViewer'


// NOTE: Data Visualization Projects
import GDP from '../components/DataVizProjects/GDP'
import ScatterPlot from '../components/DataVizProjects/ScatterPlot'
import Heatmap from '../components/DataVizProjects/Heatmap'
import ForceGraph from '../components/DataVizProjects/Force'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="privacy-policy" component={Privacy} />
		<Route path="projects" component={AllProjects} />
		<Route path="about" component={About} />
		<Route path="contact" component={Contact} />

		<Route path="wikiViewer" component={Wiki} />
		<Route path="quotepump" component={Quote} />
		<Route path="weather" component={Weather} />
		<Route path="twitch" component={Twitch} />
		<Route path="tictactoe" component={Tic} />
		<Route path="calc" component={Calc} />
		<Route path="pomodoro" component={Pomodoro} />
		<Route path="simon" component={Simon} />
		<Route path="markdown" component={Markdown} />
		<Route path="leaderboard" component={Leaderboard} />
		<Route path="recipebox" component={RecipeBox} />
		<Route path="game-of-life" component={GameOfLife} />
		<Route path="youtube-viewer" component={YoutubeViewer} />

		<Route path="GDP" component={GDP} />
		<Route path="scatterplot_doping_olympian_cyclists" component={ScatterPlot} />
		<Route path="heatmap" component={Heatmap} />
		<Route path="world-force-graph" component={ForceGraph} />

		<Route path="*" component={NotFound} />
	</Route>
)
