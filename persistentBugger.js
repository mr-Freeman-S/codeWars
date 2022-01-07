function persistence(num) {
    let myArray = (""+num).split('').map(Number)
    let answer = 1
    let count = 0
    while (true) {
        if (myArray.length == 1) {
            return count
        }
        for (let index = 0; index < myArray.length; index++) {
        answer *= myArray[index]
        }
        myArray = (""+answer).split('').map(Number)
        
        answer = 1
        count++
    }

 }
console.log(persistence(39))
