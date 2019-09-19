const interestedCells: { [key: string]: number[][] } = {
  row: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]],
  column: [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]]
}

export function getAvailableSpace(cells: number[]): number {
  const availableSpaces = cells.filter(cell => cell === 0)
  return Math.floor(Math.random() * availableSpaces.length)
}

export function getRandomValue(random = Math.random()): number {
  return random > 0.1 ? 2 : 4
}

export function isGameOver(cells: number[]): boolean {
  return cells.every(cell => cell !== 0)
}

export function shiftCells(cells: number[], action: string): number[] {
  const kindOfAction =
    action === 'right' || action === 'left' ? 'row' : 'column'
  interestedCells[kindOfAction].forEach(activeKind => {
    activeKind.forEach(item => {
      console.log(item)
    })
    const result = getValuesMerged(cells, action)
    console.log(result)
  })
  return cells
}

export function mergeCells(cells: number[], action: string): number[] {
  const cellsMerged = getValuesMerged(cells, action)
  return shiftCells(cellsMerged, action)
}

// function shiftCells(values: number[], action: string) {
//   if (action === 'left' || action === 'up') {
//     for (let index = 2; index > 0; index--) {
//       if (values[index] === 0) {
//         values[index] = values[index + 1]
//         values[index + 1] = 0
//       }
//     }
//   } else {
//     for (let index = 1; index < 3; index++) {
//       if (values[index] === 0) {
//         values[index] = values[index - 1]
//         values[index - 1] = 0
//       }
//     }
//   }
//   return values
// }

export function getValuesMerged(values: number[], action: string) {
  if (action === 'right' || action === 'down') {
    for (let index = 3; index > 0; index--) {
      if (values[index] === values[index - 1]) {
        values[index] = values[index] * 2
        values[index - 1] = 0
      }
    }
  } else {
    for (let index = 0; index < 3; index++) {
      if (values[index] === values[index + 1]) {
        values[index] = values[index] * 2
        values[index + 1] = 0
      }
    }
  }
  return values
}
