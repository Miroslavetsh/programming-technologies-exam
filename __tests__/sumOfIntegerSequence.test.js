const X = require('../sumOfIntegerSequence')

describe('Test sum of function Xn = 1, 2, 3, 4, ..., n == [sum from 1 to n]', () => {
  test('X(-12) or X of any non-positive number returns 0', () => {
    expect(X(-12)).toStrictEqual(0)
  })

  test('X() returns number', () => {
    expect(typeof X()).toStrictEqual('number')
  })

  test('X(1) ---> 1 = 1', () => {
    expect(X(1)).toStrictEqual(1)
  })

  test('X(2) ---> 1 + 2 = 3', () => {
    expect(X(2)).toStrictEqual(3)
  })

  test('X(3) ---> 1 + 2 + 3 = 6', () => {
    expect(X(3)).toStrictEqual(6)
  })

  test('X(4) ---> 1 + 2 + 3 + 4 = 6', () => {
    expect(X(4)).toStrictEqual(10)
  })

  test('X(8729386936286) ---> 3.8101098141704703e+25', () => {
    expect(X(8729386936286)).toStrictEqual(3.8101098141704703e25)
  })
})
