import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'

import Game from '../components/Game'

import { GameProvider } from '../contexts/Game'

describe('game', () => {
  test('should have two spaces filled', () => {
    const { getAllByText } = render(
      <GameProvider>
        <Game />
      </GameProvider>
    )
    const filledCells = getAllByText(/\d/)
    expect(filledCells.length).toBe(2)
  })

  test('should have three spaces filled after an arrow key is pressed', () => {
    const { getAllByText } = render(
      <GameProvider>
        <Game />
      </GameProvider>
    )
    fireEvent.keyDown(window, { key: 'ArrowDown' })
    wait(async () => {
      const filledCells = await getAllByText(/\d/)
      expect(filledCells.length).toBe(3)
    })
  })
})
