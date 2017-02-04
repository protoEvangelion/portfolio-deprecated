
import React, {Component} from 'react'
import Radium from 'radium'
import AddRecipeBtn from './AddRecipeBtn'
import Recipes from './Recipes'
import GetPinsBtn from './GetPinsBtn'
import RecipeBtns from './RecipeBtns'
import PinterestRecipes from './PinterestRecipes'

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
      pinterestRecipes: [],
      defaultRecipes: [
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
    // NOTE step: 1 in Pinterest Oauth flow get Token

    const base = 'https://api.pinterest.com/oauth/?'
    const type = 'response_type=code&'
    const redirect = 'redirect_uri=https://localhost:8443/recipebox&'
    const appId = 'client_id=4882157526600140164&'
    const scope = 'scope=read_public,write_public&'
    const state = 'state=8449codE'
    const oauth = `${base}${type}${redirect}${appId}${scope}${state}`
    window.location = oauth
  }
  componentDidMount() {
    //check url for pinterest auth code
    //check url for state to prevent spoofing
    const query = querystring.parse(window.location.search)
    let token = sessionStorage.getItem('token')

    if(query['?state'] === '8449codE' && query['code'] && token === null) {

      // NOTE step: 2 in Pinterest Oauth flow; get auth code
      console.log('entering if')
      let base = 'https://api.pinterest.com/v1/oauth/token?'
      const grant = 'grant_type=authorization_code&'
      const appId = 'client_id=4882157526600140164&'
      const appSecret = 'client_secret=4631d697d91080136adb7f8b967d2f2f479ef39866e4ec9373571d2343871c04&'
      const code = `code=${query['code']}`
      let url = `${base}${grant}${appId}${appSecret}${code}`

      axios.post(url)
        .then((res) => {
          sessionStorage.setItem('token', `access_token=${res.data.access_token}&`)
          this.getBoards(sessionStorage.getItem('token'))
        })
        .catch((err) => console.log(err))

    } else if(typeof(sessionStorage.getItem('token')) === 'string') {
        this.getBoards(sessionStorage.getItem('token'))
    }
  }
  getBoards(authToken) {
    // NOTE step: 3 in Pinterest Oauth flow; get boards
    let base = 'https://api.pinterest.com/v1/me/boards/?'
    let url = `${proxyUrl}${base}${authToken}`
    axios.get(url)
      .then((res) => {
        this.setState({
          boards: res.data.data
        })
        console.log('boards response', res.data)
      })
      .catch((err) => console.log(err))
  }
  selectBoard(board) {
    let base = 'https://api.pinterest.com/v1/boards/'
    const userUrl = new URL(board.url)
    const pathArr = userUrl.pathname.split('/')
    const user = pathArr[1]
    const boardName = pathArr[2]
    const token = sessionStorage.getItem('token')
    const fields = 'fields=id,metadata,image'
    let url = `${base}${user}/${boardName}/pins/?${token}${fields}`

    // NOTE step: 4 in Pinterest Oauth flow
    // adds pins to state
    axios.get(url)
      .then((res) => {
        let pinterestRecipes = res.data.data.map((recipe) => {
          return Object.assign({}, recipe, {expanded: false})
        })
        this.setState({pinterestRecipes})
      })
      .catch((err) => console.log(err))
  }
  collapse(i, pint) {
    if(pint === undefined) {
      const arr = this.state.defaultRecipes
      arr[i]['expanded'] = true
      this.setState({defaultRecipes: [...arr]})
    } else {
        const arr = this.state.pinterestRecipes
        arr[i]['expanded'] = true
        this.setState({pinterestRecipes: [...arr]})
    }
  }
  expand(i, pint) {
    if(pint === undefined) {
      const arr = this.state.defaultRecipes
      arr[i]['expanded'] = false
      this.setState({defaultRecipes: [...arr]})
    } else {
        const arr = this.state.pinterestRecipes
        arr[i]['expanded'] = false
        this.setState({pinterestRecipes: [...arr]})
    }
  }
  submitForm(recipeName, ingredients) {
    const newRecipe = {title: recipeName, ingredients, expanded: true}
    this.setState({
      defaultRecipes: [...this.state.defaultRecipes, newRecipe]
    })

    console.log(recipeName, ingredients)
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
            <PinterestRecipes
              pins={this.state.pinterestRecipes}
              collapse={this.collapse.bind(this)}
              expand={this.expand.bind(this)} />
            <Recipes
              recipes={this.state.defaultRecipes}
              collapse={this.collapse.bind(this)}
              expand={this.expand.bind(this)} />
            <AddRecipeBtn submit={this.submitForm.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Box = Radium(Box)
