import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'

const styles = {
  container: {
    marginBottom: '10px',
  },
  header: {
    lineHeight: '100%',
    color: 'white',
    fontSize: '2em',
    background: '#16f9ae',
    borderRadius: '10px',
    padding: '5px',
    fontFamily: "'Grand Hotel', cursive",
    cursor: 'pointer',
  },
}

let PinterestRecipes = ({pins, collapse, expand}) => {
  const clickHandler = (i) => {
    recipes[i]['expanded'] === false ? collapse(i) : expand(i)
  }
  const showIngredients = () => {

  }
  const renderTitles = () => {
    return (
      <div>
         {pins.map((recipe, i) => {
           let display = true
           return (
             <div
               key={'container'+recipe.id}
               onClick={() => showIngredients()}
               >
               <h4
                 style={styles.header}
                 key={'header' + recipe.id}
                 >
                 {recipe.metadata.recipe.name + '...'}
               </h4>
               <Collapse key={'collapse' + recipe.id} isOpened={display}>
                 {recipe.metadata.recipe.ingredients.map((ingredient) => {
                   return (
                     <div key={'container' + ingredient.category}>
                       <h5 key={'head' + ingredient.category}>
                         {ingredient.category}
                       </h5>
                       {ingredient.category.ingredients.map((info) => {
                         return (
                           <div key={'container' + info.name}>
                             <p key={'amount' + info.name}>
                               {info.amount}
                             </p>
                             <p key={'name' + info.name}>
                               {info.name}
                             </p>
                           </div>
                         )
                       })}
                     </div>
                   )
                 })}
               </Collapse>
           </div>
           )
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
