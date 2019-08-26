import { isGameOver } from './utils'

describe('utils methods', () => {
  test('is game over when there are no available spaces', () => {
    const cells = [{ id: 0, value: 2 }, { id: 1, value: 4 }]
    expect(isGameOver(cells)).toBeTruthy()
  })

  test('is not game over when there are available spaces', () => {
    const cells = [{ id: 0, value: 2 }, { id: 1, value: 0 }]
    expect(isGameOver(cells)).toBeFalsy()
  })
})
