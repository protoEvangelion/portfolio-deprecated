import React, {Component} from 'react'
import Radium from 'radium'
import AddRecipeBtn from './AddRecipeBtn'
import Recipes from './Recipes'

// const styles = {
//   constainer: {
//
//   }
// }

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      ]
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
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
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
