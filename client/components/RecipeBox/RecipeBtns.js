import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '10px',
    cursor: 'pointer',
  }
}

let RecipeBtns = ({boards, selectBoard}) => {
  const renderBoards = () => {
    return boards.map((board, i) => {
     return (
       <button
         key={board.name + i}
         onClick={() => selectBoard(board)}
         className='btn btn-primary'
         style={styles.container}>
         {board.name}
       </button>
     )
   })
  }
  let boardBtns = boards.length > 0
    ? renderBoards()
    : ''
  return (
    <div>
      {boardBtns}
    </div>
  )
}

RecipeBtns.propTypes = {
  boards: React.PropTypes.array.isRequired,
  selectBoard: React.PropTypes.func.isRequired,
}

export default RecipeBtns = Radium(RecipeBtns)
