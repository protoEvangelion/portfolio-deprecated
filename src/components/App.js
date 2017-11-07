import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import appStore from 'reducers'
import { injectGlobal, ThemeProvider } from 'styled-components'
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

const App = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
