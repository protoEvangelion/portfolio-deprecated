import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { AppContainer } from 'react-hot-loader'

const mountNode = document.getElementById('root')

ReactDOM.render(
	<AppContainer>
    <App />
	</AppContainer>,
	mountNode
)

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      mountNode
    );
  });
}
