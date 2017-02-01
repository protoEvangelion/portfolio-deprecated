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
          ]
        },
        { title: 'Pumpkin Pie',
          ingredients: [
            {name: 'Pumpkin sauce', measurement: '1 lb'},
            {name: 'Crust', measurement: '1 thing'},
            {name: 'Sugar', measurement: '5 cups'},
          ]
        },
      ]
    }
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <Recipes recipes={this.state.recipes} />
            <AddRecipeBtn />
          </div>
        </div>
      </div>
    )
  }
}

export default Box = Radium(Box)
