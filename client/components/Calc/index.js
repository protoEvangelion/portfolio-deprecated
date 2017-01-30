import React, {Component} from 'react'
import Calc from './Calc'
import smoothScroll from '../../helpers/scroll'

class App extends Component {
  componentDidMount() {
    smoothScroll(document.getElementById("calcContainer"))
	}
  render() {
    return (
      <div id="calcContainer" style={{marginBottom: '500px'}}>
        <Calc />
      </div>      
    )
  }
}

export default App
