import React, { useEffect } from 'react'

import { GameContext } from '../../contexts/Game'
import { Cell as CellType } from '../../types'

import { Grid, Cell } from './styles'

const Game: React.FC = () => {
  const { cells, start } = React.useContext(GameContext)

  useEffect(() => {
    start()
  }, [start])

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
