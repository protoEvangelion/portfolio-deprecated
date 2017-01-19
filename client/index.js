import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

//components
import App from './components/App.js'
import Home from './components/Home'
import Wiki from './components/Wiki'
import Quote from './components/Quote'
import Weather from './components/Weather'
import Twitch from './components/Twitch'
import Tic from './components/Tic'
import NotFound from './components/NotFound'
import Calc from './components/Calc'

//react router setup
import { BrowserRouter, Match, Miss } from 'react-router'
import Routes from './routes'

//redux setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'

const store = createStore(
	reducers,
	applyMiddleware(promise)
)

const Root = () => {
	return (
		<Provider store={store} >
			<BrowserRouter>
				<div>
					<Header />
					<Match exactly pattern="/" component={Home} />
					<Match pattern="/wikiViewer" component={Wiki} />
					<Match pattern="/quotepump" component={Quote} />
					<Match pattern="/weather" component={Weather} />
					<Match pattern="/twitch" component={Twitch} />
					<Match pattern="/tictactoe" component={Tic} />
					<Match pattern="/calc" component={Calc} />
					<Miss pattern="*" component={NotFound} />
				</div>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render (
		<Root/>,
		document.getElementById('root')
)
