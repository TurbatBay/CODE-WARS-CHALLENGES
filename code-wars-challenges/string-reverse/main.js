let revertedStr = ''
function solution(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr = revertedStr + str[i]
  }
  return revertedStr
}

let test = 'h'
let revertTest = solution(test)
console.log(revertTest)
