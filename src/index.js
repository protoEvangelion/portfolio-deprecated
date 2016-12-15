import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Wiki';

const root = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./components/Wiki', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/Wiki').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      root
    );
  });
}