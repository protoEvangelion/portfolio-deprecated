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
  }
}

let PinterestRecipes = ({pins, collapse, expand}) => {
  const clickHandler = (i) => {
    recipes[i]['expanded'] === false ? collapse(i) : expand(i)
  }
  const renderTitles = () => {
    return (
      <div>
         {pins.map((recipe, i) => {
           return (
             <h4
               style={styles.header}
               key={'header' + recipe.id}
               >
               {recipe.note.slice(0, 15) + '...'}
             </h4>
           )
         })}
       </div>
    )
  }
  let pinRecipes = pins.length >= 1
    ? renderTitles()
    : <div></div>
  // const renderTableBody = () => {
  //   return (
  //     <Collapse key={'collapse' + recipe.id} isOpened={recipe.expanded}>
  //       <table
  //         className="table table-hover"
  //         key={'table' + recipe.id}
  //         id={'table' + recipe.id}
  //         >
  //         <thead key={'tablehead' + recipe.id}>
  //           <tr key={'tablerow' + recipe.id}>
  //             <th key={'measure' + recipe.id}>Measurements</th>
  //             <th key={'ingredient' + recipe.id}>Ingredients</th>
  //           </tr>
  //         </thead>
  //         <tbody key={'tablebody' + recipe.id}>
  //           {recipe.ingredients.map((ingredient, i) => {
  //             return (
  //               <tr
  //                 key={'row' + i + recipe.id}
  //                 className={i % 2 === 0 ? "table-info" : ""}>
  //                 <td key={recipe.id + ingredient.measurement}>
  //                   {ingredient.measurement}
  //                 </td>
  //                 <td key={recipe.id + ingredient.name}>
  //                   {ingredient.name}
  //                 </td>
  //               </tr>
  //             )
  //           })}
  //         </tbody>
  //       </table>
  //     </Collapse>
  //   )
  // }
  return pinRecipes
}

PinterestRecipes.propTypes = {
  pins: React.PropTypes.array.isRequired,
  collapse: React.PropTypes.func.isRequired,
  expand: React.PropTypes.func.isRequired,
}

export default PinterestRecipes = Radium(PinterestRecipes)
