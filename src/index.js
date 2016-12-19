
import React from 'react'
import ReactDOM from 'react-dom'
import ReactHotLoader from 'react-hot-loader'
import { BrowserRouter } from 'react-router' 
import App from './components/Wiki'

const root = document.getElementById('root');

if (module.hot) {
  module.hot.accept('./index.js')

  module.hot.accept(
  	'./components/Wiki', 
  	() => { gNextApp = require('./components/Wiki').default;
    ReactDOM.render(
      <ReactHotLoader>
      	<BrowserRouter>
         <NextApp />
        </BrowserRouter>
      </ReactHotLoader>,
      root
    );
  });
}

ReactDOM.render(
  <ReactHotLoader>
  	<BrowserRouter>
    	<App />
    </BrowserRouter>
  </ReactHotLoader>,
  root
);