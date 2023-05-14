multiplicationTable = function(size) {
    const answer = []
    for (let i = 1; i <= size; i++) {
        let tempArr = []
        for (let j = 1; j <= size; j++) {
            tempArr.push(i*j)
        }
        answer.push(tempArr)
        tempArr = []
    }
    return answer
}

