import React from 'react'
import { Match, Miss } from 'react-router'

//components
import App from '../components/App.js'
import Home from '../components/Home'
import Wiki from '../components/Wiki'
import Quote from '../components/Quote'
import Weather from '../components/Weather'
import Twitch from '../components/Twitch'
import Tic from '../components/Tic'
import NotFound from '../components/NotFound'
import Calc from '../components/Calc'

const Routes = () => {
  return (
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/wikiViewer" component={Wiki} />
      <Match pattern="/quotepump" component={Quote} />
      <Match pattern="/weather" component={Weather} />
      <Match pattern="/twitch" component={Twitch} />
      <Match pattern="/tictactoe" component={Tic} />
      <Match pattern="/calc" component={Calc} />
      <Miss pattern="*" component={NotFound} />
    </div>
  )
}

export default Routes
