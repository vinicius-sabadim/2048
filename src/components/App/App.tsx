import React from 'react'

import { Container } from './styles'

import Header from '../Header'
import Game from '../Game'
import { GameProvider } from '../../contexts/Game'

const App: React.FC = () => {
  return (
    <GameProvider>
      <Container>
        <Header />
        <Game />
      </Container>
    </GameProvider>
  )
}

export default App
