import React from 'react'
import Calc from './Calc'

console.log('This is my node env yo', process.env.NODE_ENV)

const App = () => {
  return (
    <Calc />
  )
}

export default App
