function toUnderscore(string) {
    string =  string + ''
    if (string.length <= 1){
        return string.toLowerCase()
    }
    let word = ''
    let answer = []
    for (let i = 0; i < string.length; i++) {
        if (/[A-Z]+/g.test(string[i])) {
            answer.push(word.toLowerCase())
            word = ''
        }
        word += string[i]
        if (i === string.length -1){
            answer.push(word.toLowerCase())
            word = ''
        }
    }
    if(/[A-Z]+/g.test(string[0])){
        answer.shift()
    }

    return answer.join('_')
}

console.log(toUnderscore("1"))