const sumOfIntegerSequence = (n = 0) => {
  if (n < 0) return 0
  return (n * (n + 1)) / 2
}

if (typeof module !== 'undefined') module.exports = sumOfIntegerSequence
