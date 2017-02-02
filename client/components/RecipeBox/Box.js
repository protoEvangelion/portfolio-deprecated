
import React, {Component} from 'react'
import Radium from 'radium'
import AddRecipeBtn from './AddRecipeBtn'
import Recipes from './Recipes'
import GetPinsBtn from './GetPinsBtn'
import RecipeBtns from './RecipeBtns'

//authentication
import proxyUrl from '../../api'
import axios from 'axios'
import querystring from 'querystring'
import URL from 'url-parse'

// const styles = {
//   constainer: {
//
//   }
// }

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: [],
      recipes: [
        { title: 'Spaghetti',
          ingredients: [
            {name: 'Noodles', measurement: '1 box'},
            {name: 'Tomato Sauce', measurement: '2 cups'},
            {name: 'Meatballs', measurement: '1 lb'},
          ],
          expanded: false
        },
        { title: 'Pumpkin Pie',
          ingredients: [
            {name: 'Pumpkin sauce', measurement: '1 lb'},
            {name: 'Crust', measurement: '1 thing'},
            {name: 'Sugar', measurement: '5 cups'},
          ],
          expanded: false
        },
      ],
    token: '',
    }
  }
  getPins() {
    // NOTE step: 1 in Pinterest Oauth flow

    const base = 'https://api.pinterest.com/oauth/?'
    const type = 'response_type=code&'
    const redirect = 'redirect_uri=https://localhost:8443/recipebox&'
    const appId = 'client_id=4882157526600140164&'
    const scope = 'scope=read_public,write_public&'
    const state = 'state=8449codE'
    const oauth = `${base}${type}${redirect}${appId}${scope}${state}`

    const url = `${proxyUrl}${oauth}`

    window.location = oauth
    // axios.get(url)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))
  }
  componentDidMount() {
    //check url for pinterest auth code
    //check url for state to prevent spoofing
    const query = querystring.parse(window.location.search)

    if(query['?state'] === '8449codE' && query['code']) {

      // NOTE step: 2 in Pinterest Oauth flow

      let base = 'https://api.pinterest.com/v1/oauth/token?'
      const grant = 'grant_type=authorization_code&'
      const appId = 'client_id=4882157526600140164&'
      const appSecret = 'client_secret=4631d697d91080136adb7f8b967d2f2f479ef39866e4ec9373571d2343871c04&'
      const code = `code=${query['code']}`
      let url = `${base}${grant}${appId}${appSecret}${code}`

      axios.post(url)
        .then((res) => {

          // NOTE step: 3 in Pinterest Oauth flow

          base = 'https://api.pinterest.com/v1/me/boards/?'
          const token = `access_token=${res.data.access_token}&`

          this.setState({token})

          url = `${proxyUrl}${base}${token}`

          axios.get(url)
            .then((res) => {
              this.setState({
                boards: res.data.data
              })
              console.log(res.data)
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))

    }
  }
  collapse(i) {
    const arr = this.state.recipes
    arr[i]['expanded'] = true
    this.setState({recipes: [...arr]})
  }
  expand(i) {
    const arr = this.state.recipes
    arr[i]['expanded'] = false
    this.setState({recipes: [...arr]})
  }
  selectBoard(board) {
    let base = 'https://api.pinterest.com/v1/boards/'
    const userUrl = new URL(board.url)
    const pathArr = userUrl.pathname.split('/')
    const user = pathArr[1]
    const boardName = pathArr[2]
    const token = this.state.token
    let url = `${base}${user}/${boardName}/pins/?${token}`
    console.log(url)
    axios.get(url)
      .then((res) => {
        base = 'https://api.pinterest.com/v1/pins/'
        const pin = res.data.data[0]['url']

      })
      .catch((err) => console.log(err))
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <GetPinsBtn getPins={this.getPins.bind(this)} />
            <RecipeBtns
              boards={this.state.boards}
              selectBoard={this.selectBoard.bind(this)}/>
            <Recipes
              recipes={this.state.recipes}
              collapse={this.collapse.bind(this)}
              expand={this.expand.bind(this)}/>
            <AddRecipeBtn />
          </div>
        </div>
      </div>
    )
  }
}

export default Box = Radium(Box)
