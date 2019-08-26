import React from 'react'

import { getAvailableSpace, getRandomValue } from '../utils'

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

function initGame(cells: Cell[]): Cell[] {
  const newCells = [...cells]

  const availableSpace1 = getAvailableSpace(newCells)
  newCells[availableSpace1].value = getRandomValue()

  const availableSpace2 = getAvailableSpace(newCells)
  newCells[availableSpace2].value = getRandomValue()

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
      <GameContext.Provider
        value={{ ...this.state, start: this.start }}
        {...this.props}
      ></GameContext.Provider>
    )
  }
}
