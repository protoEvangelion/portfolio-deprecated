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
  }
}

let Recipes = ({recipes}) => {
  return (
    <div>
      {recipes.map((recipe, i) => {
        return (
          <div
            key={'container' + recipe.title}
            style={styles.container}>
            <h4
              onClick={() => collapse(recipe.title)}
              style={styles.header}
              key={'header' + recipe.title}
              >
              {recipe.title}
            </h4>
            <Collapse key={'collapse' + recipe.title} isOpened={false}>
              <table
                className="table table-hover"
                key={'table' + recipe.title}
                id={'table' + recipe.title}
                style={{display: "inline-block"}}
                >
                <thead key={'tablehead' + recipe.title}>
                  <tr key={'tablerow' + recipe.title}>
                    <th key={'measure' + recipe.title}>Measurements</th>
                    <th key={'ingredient' + recipe.title}>Ingredients</th>
                  </tr>
                </thead>
                <tbody key={'tablebody' + recipe.title}>
                  {recipe.ingredients.map((ingredient, i) => {
                    return (
                      <tr
                        key={'row' + i + recipe.title}
                        className={i % 2 === 0 ? "table-info" : ""}>
                        <td key={recipe.title + ingredient.measurement}>
                          {ingredient.measurement}
                        </td>
                        <td key={recipe.title + ingredient.name}>
                          {ingredient.name}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Collapse>
          </div>
        )
      })}
    </div>
  )
}

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
}

export default Recipes = Radium(Recipes)
