import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'

import store from './src/store'
import { theme } from './src/theme'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      <ThemeProvider theme={theme}> {bodyComponent} </ThemeProvider>{' '}
    </Provider>
  )

  // Add styled-components SSR
  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />))
  const styleElement = sheet.getStyleElement()

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents(styleElement)
}
