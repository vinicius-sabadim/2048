import React, { useEffect } from 'react'

import { GameContext } from '../../contexts/Game'

import { Grid, Cell } from './styles'

const keys: { [key: string]: string } = {
  ArrowDown: 'down',
  ArrowUp: 'up',
  ArrowLeft: 'left',
  ArrowRight: 'right'
}

interface KeyboardEvent {
  key: string
}

const Game: React.FC = () => {
  const { cells, start, updateCells } = React.useContext(GameContext)

  const pressedKeyAction = ({ key }: KeyboardEvent) => {
    const keyAction = keys[key]
    if (keyAction) {
      updateCells(keyAction)
    }
  }

  useEffect(() => {
    start()
  }, [start])

  useEffect(() => {
    window.addEventListener('keydown', pressedKeyAction)
    return () => {
      window.removeEventListener('keydown', pressedKeyAction)
    }
  })

  return (
    <Grid>
      {cells.map((cell, index) => (
        <Cell value={cell} key={`cell-${index}`}>
          {cell !== 0 ? cell : ''}
        </Cell>
      ))}
    </Grid>
  )
}

export default Game
