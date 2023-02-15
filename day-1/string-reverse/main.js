let revertedStr = ''
function solution(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr = revertedStr + str[i]
  }
  return revertedStr
}

let test = prompt('Revert hiih textee oruul')
let revertTest = solution(test)
console.log(revertTest)

const body = document.body
const div = document.createElement('h3')
div.innerText = `Reverted text: "${revertTest}"`

body.append(div)
