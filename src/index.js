import 'react-hot-loader/patch'

import App from 'components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    renderApp(App)
  })
}
