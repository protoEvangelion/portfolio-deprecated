import React from 'react'
import { render } from 'react-dom'
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

//react router setup
import { BrowserRouter, Match, Miss } from 'react-router'

//redux setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'

function configureStore() {
	const store = createStore(
		reducers,
		applyMiddleware(promise)
	)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}


export const Root = () => {
	return (
		<Provider store={configureStore()} >
			<BrowserRouter>
				<div>
					<Header />
					<Match exactly pattern="/" component={Home} />
					<Match pattern="/wikiViewer" component={Wiki} />
					<Match pattern="/quotepump" component={Quote} />
					<Match pattern="/weather" component={Weather} />
					<Match pattern="/twitch" component={Twitch} />
					<Match pattern="/tictactoe" component={Tic} />
					<Miss pattern="*" component={NotFound} />
				</div>
			</BrowserRouter>
		</Provider>
	)
}

if (!module.hot) render(<Root/>, document.getElementById('root'))
