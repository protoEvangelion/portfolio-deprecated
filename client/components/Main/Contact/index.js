import React, {Component} from 'react'
import Radium from 'radium'
import ContactForm from './ContactForm'
import Success from './Success'
import Recaptcha from 'react-grecaptcha'
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
	constructor(props) {
		super(props)
		this.state = {
			loading: 'no'
		}
	}
	handleSubmit(values) {
    console.log('handling', values)
    this.setState({loading: 'captcha'})
    // const message = values.message.replace(/ /g,"%20")
    // const url = 'mailgunMessage=' + message
    // console.log('url', url)
    // axios.get(proxyUrl, {
    //     params: {
    //       mailgunMessage: values.message
    //     }
    //   })
    //   .then((res) => console.log('frontend', res))
    //   .catch((err) => console.log(err))
  }
  nextStage(res) {
    //shows success or failure
    console.log('res', res)
    this.setState({loading: 'success'})
  }
  renderContent() {
    if(this.state.loading === 'no') {
      return (
        <div>
          <h2 style={styles.header}>You Can Ping Me Below :)</h2>
          <ContactForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      )
    } else if(this.state.loading === 'captcha') {
        return (
          <Recaptcha
            sitekey="6Le_nhcUAAAAAB0R3QbGXN7Bu14LvJPihAkiYqtP"
            callback={this.nextStage.bind(this)}/>
        )
    } else if(this.state.loading === 'success'){
        return (
          <Success />
        )
    }
  }
  render () {
    return (
      <div style={styles.container}>
        {this.renderContent()}
      </div>
    )
  }
}

export default Contact = Radium(Contact)
