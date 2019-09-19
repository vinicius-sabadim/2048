import React from 'react'

import { getAvailableSpace, getRandomValue, mergeCells } from '../utils'

interface GameContextInterface {
  cells: number[]
  start: () => void
  updateCells: (action: string) => void
}

type GameProviderState = {
  cells: number[]
}

export const GameContext = React.createContext<GameContextInterface>({
  cells: [],
  start: () => {},
  updateCells: () => {}
})

function initGame(cells: number[]): number[] {
  const newCells = [...cells]

  const availableSpace1 = getAvailableSpace(newCells)
  newCells[availableSpace1] = getRandomValue()

  const availableSpace2 = getAvailableSpace(newCells)
  newCells[availableSpace2] = getRandomValue()

  return newCells
}

export class GameProvider extends React.Component<{}, GameProviderState> {
  state = {
    cells: Array(16).fill(0)
  }

  start = () => {
    this.setState(({ cells }) => ({
      cells: initGame(cells)
    }))
  }

  updateCells = (action: string) => {
    console.log(action)
    const newCells = mergeCells(this.state.cells, action)
    this.setState({
      cells: newCells
    })
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          start: this.start,
          updateCells: this.updateCells
        }}
        {...this.props}
      ></GameContext.Provider>
    )
  }
}
