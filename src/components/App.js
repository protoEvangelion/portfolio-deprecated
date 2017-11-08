import { Home } from 'components/pages'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import appStore from 'reducers'
import { ThemeProvider, injectGlobal } from 'styled-comasdponents'

import Coda from './themes/Coda.ttf'
import theme from './themes/default'

injectGlobal`
  @font-face {
    font-family: 'Coda';
    src: url(${Coda});
  }
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
