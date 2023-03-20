function brightest(colors){
    let answer = colors[0]
    let maxColor = 0
    for (let i = 0; i < colors.length; i++) {
       let brightestColor = Math.max(parseInt(colors[i].substring(1,3),16),parseInt(colors[i].substring(3,5),16),parseInt(colors[i].substring(5,7),16))
       debugger
        if (brightestColor > maxColor) {
            answer = colors[i]
            maxColor = brightestColor
        }
    }
    return answer
}

console.log(brightest(["#FF1000", "#000000",'#0000FF']));