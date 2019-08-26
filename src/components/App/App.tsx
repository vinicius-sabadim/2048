import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Game from '../Game'

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Game />
    </Container>
  )
}

export default App
