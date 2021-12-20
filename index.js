const input = document.getElementById('input')

input.addEventListener('change', (e) => {
  if (e.target.value) alert(sumOfIntegerSequence(+e.target.value))
})
