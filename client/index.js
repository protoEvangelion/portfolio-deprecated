import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReduxProvider from './components/ReduxProvider'

const renderApp = () => {
	render(
		<AppContainer>
			<ReduxProvider/>
		</AppContainer>
	,	document.getElementById('root'))
}

renderApp()

if (module.hot) {
	module.hot.accept('./components/ReduxProvider', () => {
		const NextApp = require('./components/ReduxProvider').default;
		renderApp()
	})
}
