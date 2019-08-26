import React from 'react'
import { render } from '@testing-library/react'

import Game from '../components/Game'

import { GameProvider } from '../contexts/Game'

describe('game', () => {
  test('should have two spaces filled', () => {
    const { getAllByText } = render(
      <GameProvider>
        <Game />
      </GameProvider>
    )
    const filledCells = getAllByText(/2|4/)
    expect(filledCells.length).toBe(2)
  })
})
