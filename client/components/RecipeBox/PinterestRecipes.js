import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'

const styles = {
  container: {
    margin: '0 auto 30px auto',
    textAlign: 'center',
  },
  pinterest: {
    fontFamily: "'Grand Hotel', cursive",
    color: 'black',
    fontSize: '3em',
    textAlign: 'left',
  },
  ingredientsContainer: {
    display: 'inline-block',
    margin: '10px 20px'
  },
  header: {
    lineHeight: '100%',
    color: 'white',
    fontSize: '2em',
    padding: '5px',
    marginTop: '10px',
    fontFamily: "'Coiny', cursive",
    cursor: 'pointer',
  },
  text: {
    textAlign: 'center'
  },
}

let color1 = '#B3FFAB'
let color2 = '#12FFF7'
let background={
	background: color1,
	background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
	background: `linear-gradient(to left, ${color1} , ${color2})`
}

let PinterestRecipes = ({pins, collapse, expand}) => {
  const clickHandler = (i) => {
    pins[i]['expanded'] === false ? collapse(i, 'pint') : expand(i, 'pint')
  }
  const renderTitles = () => {
    return (
      <div style={styles.container}>
        <h4 style={styles.pinterest}>Your Pinterest Recipes: </h4>
         {pins.map((recipe, i) => {

           let display = recipe.expanded
           if(recipe.metadata.recipe) {
             return (
               <div
                 key={'container'+recipe.id}
                 >
                 <h4
                   style={[styles.header, background]}
                   key={'header' + recipe.id}
                   onClick={clickHandler.bind(this, i)}
                   >
                   {recipe.metadata.recipe.name + '...'}
                 </h4>
                 <Collapse key={'collapse' + recipe.id} isOpened={display}>
                   {recipe.metadata.recipe.ingredients.map((ingredient) => {
                     return (
                       <div style={styles.ingredientsContainer} key={'container' + ingredient.category}>
                         <h5 style={styles.text} key={'head' + ingredient.category}>
                           {ingredient.category}
                         </h5>
                         <table
                           className= "table table-hover"
                           key={'table' + recipe.id}>
                           <tbody key={'body' + recipe.id}>
                           {ingredient.ingredients.map((info) => {
                             return (
                               <tr key={'row' + info.name + recipe.id}>
                                  <td key={'amount' + info.name + recipe.id}>
                                    {info.amount} {info.name}
                                  </td>
                               </tr>
                             )
                           })}
                           </tbody>
                         </table>
                       </div>
                     )
                   })}
                 </Collapse>
               </div>
             )
           } else {
              return ''
           }
         })}
      </div>
    )
  }
  let pinRecipes = pins.length >= 1
    ? renderTitles()
    : <div></div>

  return pinRecipes
}

PinterestRecipes.propTypes = {
  pins: React.PropTypes.array.isRequired,
  collapse: React.PropTypes.func.isRequired,
  expand: React.PropTypes.func.isRequired,
}

export default PinterestRecipes = Radium(PinterestRecipes)


{/* <table
  className="table table-hover"
  key={'table' + recipe.id}
  id={'table' + recipe.id}
  >
  <thead key={'tablehead' + recipe.id}>
    <tr key={'tablerow' + recipe.id}>
      <th key={'measure' + recipe.id}>Measurements</th>
      <th key={'ingredient' + recipe.id}>Ingredients</th>
    </tr>
  </thead>
  <tbody key={'tablebody' + recipe.id}>
    {recipe.metadata.recipe.ingredients.map((ingredient, i) => {
      return (
        <tr
          key={'row' + i + recipe.id}
          className={i % 2 === 0 ? "table-info" : ""}>
          <td key={'measurements' + recipe.id}>
            {ingredient.category}
          </td>
          <td key={'ingredientname' + recipe.id}>
            {ingredient.category}
          </td>
        </tr>
      )
    })}
  </tbody>
</table> */}
