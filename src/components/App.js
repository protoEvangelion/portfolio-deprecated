import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
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
      <Helmet
        title="Portfolio"
        titleTemplate="Ryan G - %s"
        meta={[
          { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' },
          { property: 'og:site_name', content: 'ARc' },
          { property: 'og:image', content: 'https://s24.postimg.org/oa6fpvd2t/400dpi_Logo_Cropped.png' },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '150' },
          { property: 'og:image:height', content: '112' },
        ]}
        link={[
          { rel: 'icon', href: 'https://s29.postimg.org/64ns96k3b/400dpi_Logo_Cropped.jpg' },
        ]}
        script={[
          { src: 'https://use.fontawesome.com/55c49738dc.js' },
        ]}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
