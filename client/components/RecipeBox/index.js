import React, {Component} from 'react'
import Box from './Box'
import smoothScroll from '../../helpers/scroll'


class RecipeBox extends Component {
  componentDidMount() {
		smoothScroll(document.getElementById("recipeBoxContainer"))
  }
  render() {
    return (
      <div id="recipeBoxContainer">
        <Box />
      </div>
    )
  }
}

export default RecipeBox
