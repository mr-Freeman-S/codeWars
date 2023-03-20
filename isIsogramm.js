function isIsogram(str){
    let answer = ''
    for (let i = 0; i < str.length; i++) {
        if (answer.includes(str[i].toLowerCase())) {
            return false
        }
        answer += str[i].toLowerCase()
    }
    return true
}