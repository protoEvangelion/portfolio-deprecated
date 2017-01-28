import React, {Component} from 'react'
import Radium from 'radium'
import TextArea from './TextArea'
import Transformed from './Transformed'
import './styles.css'

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    marginTop: '20px',
  },
  label: {
    display: 'block',
    width: '100%',
    height: '40px',
    color: 'white',
    fontSize: '20px',
    background: '#00ffc0',
    marginBottom: '0',
    paddingLeft: '30px',
    lineHeight: '40px'
  },
}

class Markdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(e) {
    this.setState({markdown: e.target.value})
  }
  render() {
    return(
      <div style={styles.container}>
        <label style={styles.label} htmlFor="exampleTextarea">Type markdown below</label>
        <TextArea onInputChange={this.onInputChange} markdown={this.state.markdown}/>
        <Transformed markdown={this.state.markdown} />
      </div>
    )
  }
}

export default Markdown = Radium(Markdown)
