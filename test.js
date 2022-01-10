function digital_root(n) {
    let str = String(n)
    let answer = 0
    while (str.length > 1) {
        for (let i = 0; i < str.length; i++) {
          const element = str[i];
          answer += element
        }
        str = String(answer)
    }
    return answer
  }
