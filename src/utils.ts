import { Cell } from './types'

export function getAvailableSpace(cells: Cell[]): number {
  const availableSpaces = cells.filter(cell => cell.value === 0)
  const randomIndex = Math.floor(Math.random() * availableSpaces.length)
  return availableSpaces[randomIndex].id
}

export function getRandomValue(random = Math.random()): number {
  return random > 0.1 ? 2 : 4
}
