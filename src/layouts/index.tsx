import { Navbar } from 'components/organisms'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import store from 'store'
import { theme, ThemeProvider } from 'theme'
import '../css/global.css'
import '../css/ihover.css'
import '../css/responsive.css'
import '../css/semantic.min.css'

interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="Interactive Floor Plan"
            meta={[
              {
                content: 'My portfolio',
                name: 'description',
              },
              {
                content: 'gatsby, firebase, react, redux, es6, serverless',
                name: 'keywords',
              },
            ]}
          >
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
          </Helmet>

          <Navbar />

          {children()}

          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default Layout

// export default props => <div>{props.children()}</div>
