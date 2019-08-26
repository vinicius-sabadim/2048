import React, { useEffect } from 'react'

import { GameContext } from '../../contexts/Game'
import { Cell as CellType } from '../../types'

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
  const { cells, start } = React.useContext(GameContext)

  const pressedKeyAction = (event: KeyboardEvent) => {
    const { key } = event
    const keyAction = keys[key]
    if (keyAction) {
      console.log(keyAction)
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
      {cells.map((cell: CellType) => (
        <Cell value={cell.value} key={cell.id}>
          {cell.value !== 0 ? cell.value : ''}
        </Cell>
      ))}
    </Grid>
  )
}

export default Game
