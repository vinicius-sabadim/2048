import { Cell } from './types'

export function getAvailableSpace(cells: Cell[]): number {
  const availableSpaces = cells.filter(cell => cell.value === 0)
  const randomIndex = Math.floor(Math.random() * availableSpaces.length)
  return availableSpaces[randomIndex].id
}

export function getRandomValue(random = Math.random()): number {
  return random > 0.1 ? 2 : 4
}

export function isGameOver(cells: Cell[]): boolean {
  return cells.every(cell => cell.value !== 0)
}

export function mergeCells(cells: Cell[], action: string): Cell[] {
  const values = getValuesMerged(cells, action)
  const sortedValues =
    action === 'right' || action === 'down'
      ? values.sort()
      : values.sort().reverse()

  return cells.map((cell, index) => {
    return {
      ...cell,
      value: sortedValues[index]
    }
  })
}

export function getValuesMerged(cells: Cell[], action: string) {
  const values = cells.map(cell => cell.value)
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
