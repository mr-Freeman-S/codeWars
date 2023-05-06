function accum(s) {
    answer = []
    for (let i = 0; i < s.length; i++) {
        answer.push((s[i].repeat(i+1)).toLowerCase().replace(s[i].toLowerCase(),s[i].toUpperCase()))
    }
    return answer.join('-')
}

