const sumOfIntegerSequence = require('../sumOfIntegerSequence')

describe('Test sum of function Xn = 1, 2, 3, 4, ..., n == [sum from 1 to n]', () => {
  test('X() returns number', () => {
    expect(typeof sumOfIntegerSequence()).toStrictEqual('number')
  })

  test('X(1) ---> 1 = 1', () => {
    expect(sumOfIntegerSequence(1)).toStrictEqual(1)
  })

  test('X(2) ---> 1 + 2 = 3', () => {
    expect(sumOfIntegerSequence(2)).toStrictEqual(3)
  })

  test('X(3) ---> 1 + 2 + 3 = 6', () => {
    expect(sumOfIntegerSequence(3)).toStrictEqual(6)
  })

  test('X(4) ---> 1 + 2 + 3 + 4 = 6', () => {
    expect(sumOfIntegerSequence(4)).toStrictEqual(10)
  })
})
