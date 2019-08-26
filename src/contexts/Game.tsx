import React from 'react'

import { Cell } from '../types'

interface GameContextInterface {
  cells: Cell[]
  start: () => void
}

type GameProviderState = {
  cells: Cell[]
}

export const GameContext = React.createContext<GameContextInterface>({
  cells: [],
  start: () => {}
})

function getRandomIndexes(): number[] {
  const values: number[] = []
  while (values.length !== 2) {
    const generated = Math.floor(Math.random() * 16)
    if (!values.includes(generated)) {
      values.push(generated)
    }
  }
  return values
}

function getRandomValue(): number {
  const random = Math.random()
  return random < 0.1 ? 4 : 2
}

function initGame(cells: Cell[]): Cell[] {
  const newCells = [...cells]
  for (const choose of getRandomIndexes()) {
    newCells[choose].value = getRandomValue()
  }
  return newCells
}

export class GameProvider extends React.Component<{}, GameProviderState> {
  state = {
    cells: [...Array(16).keys()].map(cell => ({ id: cell, value: 0 }))
  }

  start = () => {
    this.setState(({ cells }) => ({
      cells: initGame(cells)
    }))
  }

  render() {
    return (
      <GameContext.Provider value={{ ...this.state, start: this.start }}>
        {this.props.children}
      </GameContext.Provider>
    )
  }
}
