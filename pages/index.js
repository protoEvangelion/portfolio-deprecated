import { Button } from 'components/atoms'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: orange;
  font-size: 50px;
`

const App = () => {
  return (
    <div>
      <Title>My page</Title>
      <Button>Hello</Button>
    </div>
  )
}

export default App
