// src/routes.js
import React from 'react';
import { BrowserRouter, Match } from 'react-router'

import App from './components/App';
import About from './components/About';
import WikiApp from './components/Wiki'
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
 		{
 			({ location }) => <WikiApp location={location} />
 		}
  </BrowserRouter>
);

   // <div>
	  //   <Match path="/" component={App} />
	  //   <Match path="/about" component={About} />
	  //   <Match path="/wikiviewer" component={WikiApp} />
	  //   <Match path="*" component={NotFound} />
  	// </div>

export default Routes;


