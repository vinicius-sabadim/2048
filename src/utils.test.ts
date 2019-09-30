import { isGameOver, interact } from './utils'

describe('utils methods', () => {
  test('is game over when there are no available spaces', () => {
    const cells = [2, 4]
    expect(isGameOver(cells)).toBeTruthy()
  })

  test('is not game over when there are available spaces', () => {
    const cells = [2, 0]
    expect(isGameOver(cells)).toBeFalsy()
  })

  describe('interact', () => {
    describe('action "right"', () => {
      test('there are zeros in the middle', () => {
        const cells = [2, 0, 0, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 0, 0, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'right')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the beginning', () => {
        const cells = [0, 0, 2, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 0, 0, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'right')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the end', () => {
        const cells = [2, 0, 2, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 0, 0, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'right')
        expect(result).toEqual(merged)
      })

      test('different values', () => {
        const cells = [2, 0, 8, 4, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 2, 8, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'right')
        expect(result).toEqual(merged)
      })

      test('double pair', () => {
        const cells = [2, 2, 2, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 0, 4, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'right')
        expect(result).toEqual(merged)
      })
    })

    describe('action "left"', () => {
      test('there are zeros in the middle', () => {
        const cells = [2, 0, 0, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [4, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'left')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the beginning', () => {
        const cells = [0, 2, 0, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [4, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'left')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the end', () => {
        const cells = [2, 0, 2, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [4, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'left')
        expect(result).toEqual(merged)
      })

      test('different values', () => {
        const cells = [2, 0, 8, 4, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [2, 8, 4, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'left')
        expect(result).toEqual(merged)
      })

      test('double pair', () => {
        const cells = [2, 2, 2, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        const merged = [4, 4, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'left')
        expect(result).toEqual(merged)
      })
    })

    describe('action "up"', () => {
      test('there are zeros in the middle', () => {
        const cells = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'up')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the beginning', () => {
        const cells = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'up')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the end', () => {
        const cells = [2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
        const merged = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'up')
        expect(result).toEqual(merged)
      })

      test('different values', () => {
        const cells = [2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [2, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'up')
        expect(result).toEqual(merged)
      })

      test('double pair', () => {
        const cells = [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0]
        const merged = [4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result = interact(cells, 'up')
        expect(result).toEqual(merged)
      })
    })

    describe('action "down"', () => {
      test('there are zeros in the middle', () => {
        const cells = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]
        const result = interact(cells, 'down')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the beginning', () => {
        const cells = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]
        const result = interact(cells, 'down')
        expect(result).toEqual(merged)
      })

      test('there are zeros in the end', () => {
        const cells = [2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
        const merged = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0]
        const result = interact(cells, 'down')
        expect(result).toEqual(merged)
      })

      test('different values', () => {
        const cells = [2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        const merged = [0, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0]
        const result = interact(cells, 'down')
        expect(result).toEqual(merged)
      })

      test('double pair', () => {
        const cells = [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0]
        const merged = [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0]
        const result = interact(cells, 'down')
        expect(result).toEqual(merged)
      })
    })
  })
})
