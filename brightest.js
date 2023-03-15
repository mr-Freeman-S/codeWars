function brightest(colors){
    let answer = 0
    const lettersWeight = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
    }
    for (let index = 0; index < colors.length; index++) {
        let weight = 6
        const element = colors[index];
        if (lettersWeight.hasOwnProperty(element)) {
            answer += lettersWeight[element] * weight
        } else {
            answer += element * weight
        }
        weight--
    }
    return answer
}

console.log(brightest('12F2A2F2'));