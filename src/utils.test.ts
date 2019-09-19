import { isGameOver, shiftCells } from './utils'

describe('utils methods', () => {
  test('is game over when there are no available spaces', () => {
    const cells = [2, 4]
    expect(isGameOver(cells)).toBeTruthy()
  })

  test('is not game over when there are available spaces', () => {
    const cells = [2, 0]
    expect(isGameOver(cells)).toBeFalsy()
  })

  describe('shift cells', () => {
    test.only('when there are zeros in the middle', () => {
      const cells = [2, 0, 0, 2, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
      const shift = [0, 0, 2, 2, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0]
      const result = shiftCells(cells, 'right')
      console.log(result)
      expect(result).toEqual(shift)
    })
  })

  // describe('merging cells', () => {
  //   test.only('should merge when there are 0 in the middle', () => {
  //     const cells = [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const merged = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const result = mergeCells(cells, 'right')
  //     expect(result).toEqual(merged)
  //   })

  //   test('should merge when there are 0 in the end', () => {
  //     const cells = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const merged = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const result = mergeCells(cells, 'right')
  //     expect(result).toEqual(merged)
  //   })

  //   test('should merge when there are 0 in the beginning', () => {
  //     const cells = [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const merged = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const result = mergeCells(cells, 'right')
  //     expect(result).toEqual(merged)
  //   })

  //   test('should merge when there are 1 pair and no zeros', () => {
  //     const cells = [2, 2, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const merged = [0, 4, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const result = mergeCells(cells, 'right')
  //     expect(result).toEqual(merged)
  //   })

  //   test('should merge when there are 2 pairs', () => {
  //     const cells = [2, 2, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const merged = [0, 0, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //     const result = mergeCells(cells, 'right')
  //     expect(result).toEqual(merged)
  //   })
  // })
})
