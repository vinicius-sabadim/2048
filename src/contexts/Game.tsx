import React from 'react'

import { fillOneCell, interact, isGameOver } from '../utils'

interface GameContextInterface {
  cells: number[]
  start: () => void
  interact: (action: string) => void
}

type GameProviderState = {
  cells: number[]
}

export const GameContext = React.createContext<GameContextInterface>({
  cells: [],
  start: () => {},
  interact: () => {}
})

export class GameProvider extends React.Component<{}, GameProviderState> {
  state = {
    cells: Array(16).fill(0)
  }

  start = () => {
    const cellsWithOneValue = fillOneCell(this.state.cells)
    const cellsWithTwoValues = fillOneCell(cellsWithOneValue)
    this.setState({
      cells: cellsWithTwoValues
    })
  }

  interact = async (action: string) => {
    const newCells = interact(this.state.cells, action)
    await this.setState({
      cells: newCells
    })

    if (!isGameOver(newCells)) {
      const cellsWithOneNewValue = fillOneCell(newCells)
      this.setState({
        cells: cellsWithOneNewValue
      })
    }
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          start: this.start,
          interact: this.interact
        }}
        {...this.props}
      ></GameContext.Provider>
    )
  }
}
