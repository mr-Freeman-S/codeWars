
function squareDigits(num){
    num = String(num)
    let answer = ''
    for (let i = 0; i < num.length; i++) {

        answer += (+num[i])**2
    }
  
    return +answer;
  }