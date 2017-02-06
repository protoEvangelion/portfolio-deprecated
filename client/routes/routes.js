import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App.js'
import Home from '../components/Home'
import Wiki from '../components/Wiki'
import Quote from '../components/Quote'
import Weather from '../components/Weather'
import Twitch from '../components/Twitch'
import Tic from '../components/Tic'
import NotFound from '../components/NotFound'
import Calc from '../components/Calc'
import Pomodoro from '../components/Pomodoro'
import Simon from '../components/Simon'
import Markdown from '../components/Markdown'
import Leaderboard from '../components/Leaderboard'
import RecipeBox from '../components/RecipeBox'
import Privacy from '../components/Privacy'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
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
		<Route path="privacy-policy" component={Privacy} />
		<Route path="*" component={NotFound} />
	</Route>
)
