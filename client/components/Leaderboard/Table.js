import React, {Component} from 'react'
import Radium, {StyleRoot} from 'radium'
import axios from 'axios'
import proxyUrl from '../../api'

const styles = {
  click: {
    cursor: 'pointer',
    textAlign: 'center',
    ':hover': {
      background: '#eceeef'
    }
  },
  row: {
    textAlign: 'center',
    lineHeight: '40px'
  },
  center: {
    textAlign: 'center',
  },
  img: {
    borderRadius: '10px',
    width: '40px',
    height: '40px',
    marginRight: '20px',
    '@media screen and (max-width: 786px)': {
      display: 'block',
    }
  }
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentData: '',
      loadingInitial: true,
      loadingRecent: false,
      loadingAllTime: false,
    }
  }
  componentDidMount() {
    //pulls the recent camper's data
    this.onRecentClick()
  }
  onAllTimeClick() {
    this.setState({loadingAllTime: true})
    const topAllTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
    axios.get(`${proxyUrl}${topAllTimeUrl}`)
      .then((res) => {
        this.setState({
          data: res.data,
          currentData: 'topAllTime',
          loadingAllTime: false,
        })
      })
  }
  onRecentClick() {
    this.setState({loadingRecent: true})
    const topRecentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    axios.get(`${proxyUrl}${topRecentUrl}`)
      .then((res) => {
        this.setState({
          data: res.data,
          currentData: 'topRecent',
          loadingInitial: false,
          loadingRecent: false,
        })
      })
  }
  renderList(data) {
    if(data) {
      return (
        <tbody>
          {data.map((camper, i) => {
            return (
              <tr
                key={camper.username}
                className={i%2 === 0 ? 'table-info' : ''}
                >
                <th style={styles.row} scope="row">{i+1}</th>
                <td>
                  <img src={camper.img} alt="camper avatar" style={styles.img}/>
                  <a href={`https://www.freecodecamp.com/${camper.username}`}> {camper.username} </a>
                </td>
                <td style={styles.row}>{camper.recent}</td>
                <td style={styles.row}>{camper.alltime}</td>
              </tr>
            )
          })}
        </tbody>
      )
    } else {
        return <div></div>
    }
  }
  loading() {
    let spinner = this.state.loadingInitial === true
      ?  <i style={{color: '#33adff', marginTop: '50px'}} className="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
      : ''
    return spinner
  }
  recentSymbol() {
    if(this.state.loadingRecent === true) {
      return <i style={{color: '#33adff'}} className="fa fa-spinner fa-pulse fa-1x" aria-hidden="true"></i>
    } else if(this.state.currentData === 'topRecent'){
        return '▼'
    } else {
        return ''
    }
  }
  allTimeSymbol() {
    if(this.state.loadingAllTime === true) {
      return <i style={{color: '#33adff'}} className="fa fa-spinner fa-pulse fa-1x" aria-hidden="true"></i>
    } else if(this.state.currentData === 'topAllTime'){
        return '▼'
    } else {
        return ''
    }
  }
  render() {
    return(
        <div style={styles.container}>
          <div className="container">
      			<div className="row">
      				<div className="col-12">
                <StyleRoot>
      					<table className="table table-hover">
                  <thead>
                    <tr>
                      <th style={styles.center}>#</th>
                      <th>Camper Name</th>
                      <th
                        key="recent"
                        style={styles.click}
                        onClick={() => this.onRecentClick()}>
                        Posts in past 30 days {this.recentSymbol()}</th>
                      <th
                        key="alltime"
                        style={styles.click}
                        onClick={() => this.onAllTimeClick()}>
                        All time points {this.allTimeSymbol()}</th>
                    </tr>
                  </thead>
                  {this.renderList(this.state.data)}
                </table>
                </StyleRoot>
                <div style={{textAlign: 'center'}}>
                  {this.loading()}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Table = Radium(Table)
