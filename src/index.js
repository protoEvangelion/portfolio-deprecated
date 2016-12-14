// index.js
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import Routes from './routes';

import './index.css';
const root = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
		<Routes history={browserHistory} />  
  </AppContainer>,
  root
);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextApp = require('./routes').default
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			root
		)
	})
}
