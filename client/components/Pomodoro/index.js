import React, { Component } from 'react'
import Radium from 'radium'
import IncDec from './IncDec'
import Start from './Start'
import Display from './Display'


class Pomodoro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionTime: 0,
      breakTime: 0,
      time: {
        h: 0,
        m: 0,
        s: 0
      },
      seconds: 5
    }
    this.timer = 0
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }
  increment() {
    console.log('increment')
    this.setState({
      sessionTime: this.state.sessionTime + 1
    })
  }
  decrement() {
    console.log('decrement')
    this.setState({
      sessionTime: this.state.sessionTime - 1
    })
  }
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h3>Session Time</h3>
        <IncDec
          increment={this.increment}
          decrement={this.decrement}
          type="primary"
          value={this.state.sessionTime}
        />
        <h3>Break Time</h3>
        <IncDec
          increment={this.increment}
          decrement={this.decrement}
          value={this.state.breakTime}
        />
        <Start onClick={this.startTimer} />
        <Display
          minutes={this.state.time.m} seconds={this.state.time.s}/>
      </div>
    )
  }
}

export default Pomodoro = Radium(Pomodoro)
