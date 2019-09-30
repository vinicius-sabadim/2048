const sections: { [key: string]: number[][] } = {
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

export function interact(cells: number[], action: string): number[] {
  const whatIsTheKindOfAction =
    action === 'right' || action === 'left' ? 'row' : 'column'

  // The cells has a length of 16, but we are interested in do the merger
  // using 4 items every time, depending of the action
  // it can be 4 in a row or 4 in a column
  for (const interestedSection of sections[whatIsTheKindOfAction]) {
    const valuesOnSection: number[] = []

    for (const cellIndex of interestedSection) {
      valuesOnSection.push(cells[cellIndex])
    }

    const sectionWithValuesOnBegin = removeZerosFromInside(valuesOnSection)
    const sectionWithValuesMerged = getValuesMerged(sectionWithValuesOnBegin)

    const newValues =
      action === 'right' || action === 'down'
        ? shiftToEnd(sectionWithValuesMerged)
        : sectionWithValuesMerged

    let index = 0
    for (const cellIndex of interestedSection) {
      cells[cellIndex] = newValues[index]
      index += 1
    }
  }

  return cells
}

function removeZerosFromInside(section: number[]): number[] {
  const values = [0, 0, 0, 0]
  let index = 0

  for (const value of section) {
    if (value !== 0) {
      values[index] = value
      index += 1
    }
  }

  return values
}

function getValuesMerged(values: number[]) {
  for (let index = 0; index < 3; index++) {
    if (values[index] === values[index + 1]) {
      values[index] = values[index] * 2
      values[index + 1] = 0
    }
  }
  return removeZerosFromInside(values)
}

function shiftToEnd(section: number[]) {
  const values = [0, 0, 0, 0]
  let index = 3

  for (const value of section.reverse()) {
    if (value !== 0) {
      values[index] = value
      index -= 1
    }
  }

  return values
}
