import React, {Component} from 'react'
import Radium from 'radium'
import ContactForm from './ContactForm'

import axios from 'axios'
import proxyUrl from '../../../api'

const styles = {
  container: {
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  header: {
    marginBottom: '50px',
    fontFamily: 'Rock Salt'
  },
  form: {
    minWidth: '50%'
  }
}

class Contact extends Component {
  handleSubmit(values) {
    console.log('handling', values)
    const message = values.message.replace(/ /g,"%20")
    const url = 'mailgunMessage=' + message
    console.log('url', url)
    axios.get(proxyUrl, {
        params: {
          mailgunMessage: values.message
        }
      })
      .then((res) => console.log('frontend', res))
      .catch((err) => console.log(err))
  }
  render () {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>You Can Ping Me Below :)</h2>
        <ContactForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Contact = Radium(Contact)
