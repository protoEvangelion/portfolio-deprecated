import React, { Component } from 'react'
import Radium from 'radium'
import IncDec from './IncDec'
import Start from './Start'
import Pause from './Pause'
import Display from './Display'

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
  },
  block: {
    display: 'inline-block',
    margin: '0 20px',
  },
  incdec: {
    display: 'block'
  }
}

class Pomodoro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionTime: 1,
      breakTime: 1,
      sessionMinutes: 1,
      breakMinutes: 1,
      seconds: 0,
      initialized: 'no',
      type: 'session',
      paused: false
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
    this.countDown = this.countDown.bind(this)
  }
  increment(type) {
    // sets the correct time for session and break btns
    if(type === 'btn-primary') {
        this.setState({
          sessionTime: this.state.sessionTime + 1,
          sessionMinutes: this.state.sessionMinutes + 1
        })
    } else {
        this.setState({
          breakTime: this.state.breakTime + 1,
          breakMinutes: this.state.breakMinutes + 1
        })
    }
  }
  decrement(type) {
    if(type === 'btn-primary') {
      if(this.state.sessionTime > 0) {
        this.setState({
          sessionTime: this.state.sessionTime - 1,
          sessionMinutes: this.state.sessionMinutes - 1
        })
      }
    } else {
        if(this.state.breakTime > 0) {
          this.setState({
            breakTime: this.state.breakTime - 1,
            breakMinutes: this.state.breakMinutes - 1
          })
        }
    }
  }
  check(constMinutes, tempMinutes) {
    //check if minutes = 1
    if(constMinutes === 1) {
        return 1
    } else {
        return constMinutes
    }
  }
  countDown(paused) {
    console.log('running')
    if(this.state.paused === false) {
      if(this.state.sessionMinutes === 0 && this.state.seconds === 0) {
          this.setState({
            type: 'break',
            sessionMinutes: this.check(this.state.sessionTime, this.state.sessionMinutes),
            seconds: 0,
          })
      } else if(this.state.breakMinutes === 0 && this.state.seconds === 0) {
          this.setState({
            type: 'session',
            breakMinutes: this.check(this.state.breakTime, this.state.breakMinutes),
            seconds: 0,
          })
      } else if(this.state.type === 'session') {
          if(this.state.seconds === 0) {
              this.setState({
                seconds: 59,
                sessionMinutes: this.state.sessionMinutes - 1
              })
          } else {
              this.setState({
                seconds: this.state.seconds - 1
              })
          }
      } else {
          if(this.state.seconds === 0) {
              this.setState({
                seconds: 59,
                breakMinutes: this.state.breakMinutes - 1
              })
          } else {
              this.setState({
                seconds: this.state.seconds - 1
              })
          }
      }
    } else if(this.state.paused === true){
        console.log('paused')
        return
    }

    setTimeout(() => this.countDown(false), 1000)
  }
  start() {
    if(this.state.initialized === 'no') {
      this.setState({
        initialized: 'yes',
        sessionMinutes: this.check(this.state.sessionTime, this.state.sessionMinutes),
        breakMinutes: this.check(this.state.breakTime, this.state.breakMinutes),
      })

      this.countDown(false)

    } else if(this.state.initialized === 'yes' && this.state.paused === true) {
        this.setState({paused: false})
        this.countDown(false)
    } else {
        alert('The Pomodoro is already running')
    }
  }
  pause() {
    this.setState({paused: true})
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.block}>
          <h5 style={styles.incdec}>Session Time</h5>
          <IncDec
            increment={this.increment}
            decrement={this.decrement}
            type="primary"
            value={this.state.sessionTime}/>
        </div>
        <div style={styles.block}>
          <h5 style={styles.incdec}>Break Time</h5>
          <IncDec
            increment={this.increment}
            decrement={this.decrement}
            value={this.state.breakTime}/>
        </div><br/>
        <div style={styles.block}>
          <Start start={this.start} />
          <Pause pause={this.pause} />
        </div>
        <div>
          <Display
            type={this.state.type}
            sessionTime={this.state.sessionMinutes}
            breakTime={this.state.breakMinutes}
            seconds={this.state.seconds}
            initialized={this.state.initialized}/>
        </div>
      </div>
    )
  }
}

export default Pomodoro = Radium(Pomodoro)
