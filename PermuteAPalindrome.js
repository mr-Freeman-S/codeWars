function permuteAPalindrome (input) {
    const answerObj = {}
    let answer = 0
    for (let i = 0; i < input.length; i++) {
        if (answerObj.hasOwnProperty(input[i])) answerObj[input[i]] += 1
        else answerObj[input[i]] = 1
    }
    for (const answerObjKey in answerObj) {
        if (answerObj[answerObjKey] % 2 === 1) answer += 1
    }
    return answer < 2

}

