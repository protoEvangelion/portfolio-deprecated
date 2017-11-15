import { HomePage, NotFoundPage } from 'components/pages'
import React from 'react'
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from 'theme'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="Proto - %s">
        <title>Atomic React</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="port" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Proto" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="https://arc.js.org/icon.png" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
