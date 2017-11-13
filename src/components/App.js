import { HomePage } from 'components/pages'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import appStore from 'reducers'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'

const App = () => {
  return (
    <Provider store={appStore}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={HomePage} />
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
