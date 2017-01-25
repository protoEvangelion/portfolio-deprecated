import React, {Component} from 'react'
import Radium from 'radium'
import Game from './Game'

const styles = {
  container: {
  	width: '250px',
  },
}

class Simon extends Component {
  constructor(props){
    super(props)
    this.state = {
      on: false,
      round: '',
      colors: ['green', 'red', 'blue', 'yellow'],
      memorize: '',
      roundColors: [],
      clicks: 0,
      currentColor: '',
      cursor: 'not-allowed',
      strict: false
    }
    this.turnOnOff = this.turnOnOff.bind(this)
    this.padClick = this.padClick.bind(this)
    this.start = this.start.bind(this)
    this.strict = this.strict.bind(this)
  }
  turnOnOff() {
    console.log('turning')
    this.setState({on: !this.state.on})
    if(!this.state.on === false) {
      this.setState({
        round: '',
        memorize: '',
        roundColors: '',
        clicks: 0,
        currentColor: '',
        cursor: 'not-allowed',
        strict: false
      })
    } else if(!this.state.on === true) {
        this.setState({round: 1})
    }
  }
  strict() {
    if(this.state.on === true) {
      this.setState({strict: !this.state.strict})
    }
  }
  beginRound(colorArr){
    let i = 0
    this.setState({
      memorize : colorArr[i],
      roundColors: colorArr,
      currentColor: colorArr[i],
      cursor: 'not-allowed'
    })
    i++
    const loop = () => {

      setTimeout(() => {
        this.setState({
          memorize : colorArr[i],
          currentColor: colorArr[i]
        })
        let audio = document.getElementById('audio')
        audio.src = require(`./${colorArr[i-1]}.mp3`)
        audio.play()

        if(i===colorArr.length) {
          this.setState({cursor: 'pointer'})
        }

        i++
        if(i < this.state.round+1) {
          loop()
        }
      }, 1000)
    }
    loop()
  }

  start(round) {
    let colorArr = []
    for (let i = 0; i < round; i++) {
      let rand = Math.floor(Math.random() * 4) + 0
      colorArr.push(this.state.colors[rand])
    }
    this.beginRound(colorArr)
  }

  padClick(e, color) {
    if(this.state.cursor === 'not-allowed') {
      e.preventDefault()
    } else {
        this.setState({
          clicks: this.state.clicks + 1,
          currentColor: color
        })
        let roundColors = this.state.roundColors
        let round = this.state.round

        let audio = document.getElementById('audio')
        audio.src = require(`./${color}.mp3`)
        audio.play()

        //handle wrong click
        if(roundColors[this.state.clicks] !== color) {
          if(this.state.strict === false) {
            this.setState({
              round: 0,
              clicks: 0
            })
            setTimeout(() => {
              this.setState({round: round})
              this.beginRound(roundColors)
            }, 1000)
          } else {
            //if in strict mode
            this.setState({
              round: 0,
              clicks: 0,
            })
            setTimeout(() => {
              this.setState({
                round: 1,
                memorize: '',
                roundColors: '',
                currentColor: '',
                cursor: 'not-allowed',
              })
              this.start(1)
            }, 1000)
          }
        } else if(roundColors.length - 1 === this.state.clicks && roundColors[roundColors.length - 1] === color){
            //detects if player is correct on last click
            this.setState({
              round: round + 1,
              clicks: 0
            })
            let rand = Math.floor(Math.random() * 4) + 0
            let newColor = this.state.colors[rand]
            let newArr = [...this.state.roundColors, newColor]
            this.beginRound(newArr)
        }
      }

  }
  render() {
    return(
      <div id="gameContainer">
        <Game
          on={this.state.on}
          turnOnOff={this.turnOnOff}
          click={this.padClick}
          start={this.start}
          round={this.state.round}
          memorize={this.state.memorize}
          sound={this.state.sound}
          url={`./${this.state.currentColor}.mp3`}
          cursor={this.state.cursor}
          strict={this.strict}
          strictMode={this.state.strict}
        />
        <audio id="audio" src={require(`./red.mp3`)} ></audio>
      </div>
    )
  }
}

export default Simon = Radium(Simon)
