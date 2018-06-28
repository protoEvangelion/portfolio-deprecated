// import { Footer, Navbar } from 'components/organisms'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import store from '../store'

import '../css/global.css'
import '../css/ihover.css'
import '../css/responsive.css'
import '../css/semantic.min.css'

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, {}> {
  render() {
    return (
      <Provider store={store}>
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

        {/* <Navbar /> */}

        {this.props.children()}

        {/* <Footer /> */}
      </Provider>
    )
  }
}

export default props => <div>{props.children()}</div>
