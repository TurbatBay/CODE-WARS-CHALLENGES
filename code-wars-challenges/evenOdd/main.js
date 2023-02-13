function everOrOdd(number) {
  if (number % 2 === 0) {
    return (number = 'Even')
  } else {
    return (number = 'Odd')
  }
}

everOrOdd(14)
const body = document.body
const div = document.createElement('h3')
div.innerText = `It is: "${everOrOdd(14)}"`

body.append(div)
