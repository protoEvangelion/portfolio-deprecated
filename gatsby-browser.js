import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import store from './src/store'
import theme from './src/theme'

exports.replaceRouterComponent = ({ history }) => {
	const ConnectedRouterWrapper = ({ children }) => (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router history={history}>{children}</Router>
			</ThemeProvider>
		</Provider>
	)

	return ConnectedRouterWrapper
}
