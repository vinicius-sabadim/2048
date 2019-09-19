import { isGameOver, mergeCells } from './utils'

describe('utils methods', () => {
  test('is game over when there are no available spaces', () => {
    const cells = [{ id: 0, value: 2 }, { id: 1, value: 4 }]
    expect(isGameOver(cells)).toBeTruthy()
  })

  test('is not game over when there are available spaces', () => {
    const cells = [{ id: 0, value: 2 }, { id: 1, value: 0 }]
    expect(isGameOver(cells)).toBeFalsy()
  })

  describe('merging cells', () => {
    test('should merge cells with the right action', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 1, value: 4 },
        { id: 2, value: 4 },
        { id: 3, value: 2 }
      ]
      const merged = [
        { id: 0, value: 0 },
        { id: 1, value: 2 },
        { id: 2, value: 8 },
        { id: 3, value: 2 }
      ]
      const result = mergeCells(cells, 'right')
      expect(result).toEqual(merged)
    })
    test('should merge cells with the left action', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 1, value: 4 },
        { id: 2, value: 4 },
        { id: 3, value: 2 }
      ]
      const merged = [
        { id: 0, value: 2 },
        { id: 1, value: 8 },
        { id: 2, value: 2 },
        { id: 3, value: 0 }
      ]
      const result = mergeCells(cells, 'left')
      expect(result).toEqual(merged)
    })
    test('should merge cells with the up action', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 4, value: 4 },
        { id: 8, value: 4 },
        { id: 12, value: 2 }
      ]
      const merged = [
        { id: 0, value: 2 },
        { id: 4, value: 8 },
        { id: 8, value: 2 },
        { id: 12, value: 0 }
      ]
      const result = mergeCells(cells, 'up')
      expect(result).toEqual(merged)
    })
    test('should merge cells with the down action', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 4, value: 4 },
        { id: 8, value: 4 },
        { id: 12, value: 2 }
      ]
      const merged = [
        { id: 0, value: 0 },
        { id: 4, value: 2 },
        { id: 8, value: 8 },
        { id: 12, value: 2 }
      ]
      const result = mergeCells(cells, 'down')
      expect(result).toEqual(merged)
    })
    test('should merge cells with the down action', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 4, value: 2 },
        { id: 8, value: 0 },
        { id: 12, value: 2 }
      ]
      const merged = [
        { id: 0, value: 0 },
        { id: 4, value: 0 },
        { id: 8, value: 4 },
        { id: 12, value: 2 }
      ]
      const result = mergeCells(cells, 'down')
      expect(result).toEqual(merged)
    })
    test('should merge cells when there are two pairs to be merged', () => {
      const cells = [
        { id: 0, value: 2 },
        { id: 4, value: 2 },
        { id: 8, value: 2 },
        { id: 12, value: 2 }
      ]
      const merged = [
        { id: 0, value: 0 },
        { id: 4, value: 0 },
        { id: 8, value: 4 },
        { id: 12, value: 4 }
      ]
      const result = mergeCells(cells, 'down')
      expect(result).toEqual(merged)
    })
  })
})
